/* ==========================================================================
   CANDOR LIVING × TaskFloVA — Content Portal engine
   Auth · nav tree · block editor (drag + edit) · SEO scoring rail
   ========================================================================== */
(function () {
  "use strict";

  var D = window.CANDOR;
  var PASS_HASH = "63bf487578e946cfa006bed174e70e8140d5d48fc952fd8db1f1988960e5484e"; /* sha256("CandorCare2026") */
  var LS = "cl_edits_v1_";
  /* realistic word targets (leave visible headroom, like a real SEO tool) */
  var TARGETS = { home: 620, about: 380, services: 340, "service-24hour": 300, "service-respite": 285,
    "service-personal": 260, "service-companionship": 270, "service-homesupport": 280, blog: 300, careers: 240, contact: 140 };
  var AI_PROXY = "https://candor-ai-proxy-production.up.railway.app"; /* ZeroGPT proxy (Railway) */

  /* ---------- tiny helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function escAttr(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;"); }
  function sha256(str) {
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(str)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
    });
  }
  function fmtVol(v) { if (!v) return ""; return v >= 1000 ? (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + "k" : String(v); }
  function stripTags(html) { var d = el("div", null, html); return d.textContent || ""; }
  function headingsText(html) {
    var d = el("div", null, html), out = [];
    d.querySelectorAll("h1,h2,h3").forEach(function (h) { out.push(h.textContent); });
    return out.join(" ");
  }
  /* normalize so "24-hour" == "24 hour", "in-home" == "in home", "non-medical" == "non medical" */
  function norm(s) { return (s || "").toLowerCase().replace(/[‐-―\-\/]/g, " ").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim(); }
  /* Proximity-tolerant term regex (like NeuronWriter): allow up to 2 filler words between
     keyword tokens, so "home care houston" also matches "home care in Houston". */
  function esc(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function termRe(term, global) {
    var toks = norm(term).split(" ").filter(Boolean); if (!toks.length) return null;
    var body = toks.map(esc).join("(?: \\w+){0,2} ");
    return new RegExp("(?:^|[^a-z0-9])(" + body + ")(?![a-z0-9])", global ? "g" : "");
  }
  function countTerm(normText, term) {
    var re = termRe(term, true); if (!re) return 0;
    var n = 0, m; while ((m = re.exec(normText))) { n++; if (m.index === re.lastIndex) re.lastIndex++; }
    return n;
  }
  function hasTerm(normText, term) { var re = termRe(term, false); return re ? re.test(normText) : false; }

  /* ---------- effective page model (defaults + saved edits) ---------- */
  function savedEdits(key) { try { return JSON.parse(localStorage.getItem(LS + key) || "null"); } catch (e) { return null; } }
  function getModel(key) {
    var p = D.pages[key]; if (!p) return null;
    var s = savedEdits(key);
    var blocks = p.blocks.map(function (b) { return { id: b.id, type: b.type, label: b.label, html: b.html }; });
    var seoTitle = p.seoTitle || "", meta = p.metaDescription || "";
    if (s) {
      if (s.seoTitle != null) seoTitle = s.seoTitle;
      if (s.meta != null) meta = s.meta;
      if (s.blocks) blocks.forEach(function (b) { if (s.blocks[b.id] != null) b.html = s.blocks[b.id]; });
      if (s.order) blocks.sort(function (a, b) { var ia = s.order.indexOf(a.id), ib = s.order.indexOf(b.id); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib); });
    }
    return { page: p, seoTitle: seoTitle, meta: meta, blocks: blocks };
  }
  function persist(key) {
    var doc = $("#canvas .doc"); if (!doc) return;
    var out = { seoTitle: null, meta: null, blocks: {}, order: [] };
    var t = $("#seo-title", doc); if (t) out.seoTitle = t.value;
    var m = $("#seo-meta", doc); if (m) out.meta = m.value;
    Array.prototype.forEach.call(document.querySelectorAll("#canvas .block"), function (bl) {
      var id = bl.getAttribute("data-id");
      out.order.push(id);
      var body = $(".block__body", bl); if (body) out.blocks[id] = body.innerHTML;
    });
    try { localStorage.setItem(LS + key, JSON.stringify(out)); } catch (e) {}
  }

  /* ---------- scoring ---------- */
  function scoreModel(key, live) {
    var p = D.pages[key];
    var contentHtml, seoTitle;
    if (live) {
      var doc = $("#canvas .doc");
      contentHtml = ""; Array.prototype.forEach.call(document.querySelectorAll("#canvas .block__body"), function (b) { contentHtml += " " + b.innerHTML; });
      seoTitle = ($("#seo-title") && $("#seo-title").value) || "";
    } else {
      var m = getModel(key); contentHtml = m.blocks.map(function (b) { return b.html; }).join(" "); seoTitle = m.seoTitle;
    }
    var contentText = stripTags(contentHtml);
    var nText = norm(contentText), nHead = norm(headingsText(contentHtml)), nTitle = norm(seoTitle);
    var words = (contentText.trim().match(/\S+/g) || []).length;
    var kws = [];
    if (p.keywords) {
      (p.keywords.basic || []).forEach(function (k) { kws.push({ term: k.term, vol: k.vol, min: k.min, max: k.max, tier: "basic" }); });
      (p.keywords.extended || []).forEach(function (k) { kws.push({ term: k.term, vol: k.vol, min: k.min, max: k.max, tier: "extended" }); });
    }
    var per = kws.map(function (k) {
      var c = countTerm(nText, k.term);
      var status;
      if (k.min === 0) status = "target";
      else if (c === 0) status = "todo";
      else if (c < k.min) status = "partial";
      else if (k.max > 0 && c > k.max) status = "over";
      else status = "done";
      return { term: k.term, vol: k.vol, min: k.min, max: k.max, tier: k.tier, count: c,
               status: status, inTitle: hasTerm(nTitle, k.term), inHead: hasTerm(nHead, k.term) };
    });
    var scored = per.filter(function (x) { return x.min > 0; });
    var primary = null;
    for (var pi = 0; pi < per.length; pi++) { if (per[pi].tier === "basic" && per[pi].min > 0) { primary = per[pi]; break; } }
    function tScore(x) { if (x.count >= x.min) return (x.max > 0 && x.count > x.max) ? 0.85 : 1; if (x.count > 0) return 0.5 + 0.5 * (x.count / x.min); return 0; }
    var wsum = 0, ssum = 0;
    scored.forEach(function (x) { var w = (x === primary ? 3 : (x.tier === "basic" ? 2 : 1)); wsum += w; ssum += w * tScore(x); });
    var TERMS = wsum ? ssum / wsum : 1;
    var anyBasicTitle = scored.some(function (x) { return x.tier === "basic" && x.inTitle; });
    var TITLE = primary ? (primary.inTitle ? 1 : (anyBasicTitle ? 0.5 : 0)) : (anyBasicTitle ? 1 : 0.6);
    var headHits = scored.filter(function (x) { return x.inHead; }).length;
    var HEAD = Math.min(1, headHits / Math.max(1, Math.min(scored.length, 4)));
    var target = TARGETS[key] || p.targetWords || 0;
    var WORDS = target ? Math.min(1, words / target) : 1;
    var overall = Math.round(100 * (TERMS * 0.50 + TITLE * 0.18 + HEAD * 0.14 + WORDS * 0.18));
    return { overall: overall, TERMS: TERMS, TITLE: TITLE, HEAD: HEAD, WORDS: WORDS, words: words, target: target, per: per, scored: scored.length };
  }

  /* ---------- nav ---------- */
  var NAV = [
    { group: "Branding", items: [
      { key: "brand-logo" }, { key: "brand-palette" }, { key: "brand-typography" }, { key: "brand-sitemap" }, { key: "brand-seo" } ] },
    { group: "Pages", items: [
      { key: "home" }, { key: "about" },
      { key: "services", children: ["service-24hour", "service-respite", "service-personal", "service-companionship", "service-homesupport"] },
      { key: "blog" }, { key: "careers" }, { key: "contact" } ] }
  ];
  var ICON = {
    "brand-logo": "M12 2 4 7v10l8 5 8-5V7Z", "brand-palette": "M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .9-1.5 2-1.5h1a4 4 0 0 0 4-4c0-4-3.6-7-8-7Z|C7.5 8 8.5 9|C10 6.5 11.5 6.5|C15 6.5 16 8",
    "brand-typography": "M4 7V5h16v2M9 5v14M15 5v14M7 19h4M13 19h4", "brand-sitemap": "M9 3h6v4H9zM3 17h6v4H3zM15 17h6v4h-6zM12 7v4M6 17v-3h12v3",
    "brand-seo": "M4 19V5M4 19h16M8 15l3-4 3 2 4-6", "home": "M3 10.5 12 3l9 7.5M5 9v11h5v-6h4v6h5V9",
    "about": "M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9",
    "services": "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z", "blog": "M4 4h11l5 5v11H4zM14 4v5h5M8 13h8M8 17h5",
    "careers": "M3 8h18v12H3zM8 8V5h8v3M3 13h18", "contact": "M4 5h16v14H4zM4 6l8 6 8-6", "dot": "M12 12h.01"
  };
  function iconSvg(key) {
    var d = ICON[key] || ICON.dot;
    var paths = d.split("|").map(function (seg) { return "<path d='" + seg + "'/>"; }).join("");
    return "<svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'>" + paths + "</svg>";
  }
  function scoreBadge(key) {
    var p = D.pages[key]; if (!p || p.kind !== "content") return "";
    var s = scoreModel(key, false);
    return "<span class='nav__score'>" + s.overall + "</span>";
  }
  function navLink(key, isChild) {
    var p = D.pages[key];
    var a = el("a", "nav__link" + (isChild ? " nav__link--child" : ""));
    a.href = "#" + key; a.setAttribute("data-key", key);
    a.innerHTML = (isChild ? "" : "<span class='nav__ico'>" + iconSvg(key) + "</span>") +
      "<span class='nav__label'>" + p.nav + "</span>" + scoreBadge(key);
    return a;
  }
  function buildNav() {
    var nav = $("#nav"); nav.innerHTML = "";
    NAV.forEach(function (g) {
      nav.appendChild(el("p", "nav__group", g.group));
      g.items.forEach(function (it) {
        if (it.children) {
          var wrap = el("div", "nav__parentwrap");
          var parent = navLink(it.key, false);
          parent.classList.add("nav__parent");
          parent.insertAdjacentHTML("beforeend", "<span class='nav__caret'><svg viewBox='0 0 24 24' width='14' height='14' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='m9 18 6-6-6-6'/></svg></span>");
          parent.addEventListener("click", function (e) {
            /* clicking the row navigates AND toggles open */
            parent.classList.toggle("is-open");
          });
          wrap.appendChild(parent);
          var kids = el("div", "nav__children");
          it.children.forEach(function (ck) { kids.appendChild(navLink(ck, true)); });
          wrap.appendChild(kids);
          nav.appendChild(wrap);
        } else {
          nav.appendChild(navLink(it.key, false));
        }
      });
    });
  }
  function setActiveNav(key) {
    Array.prototype.forEach.call(document.querySelectorAll(".nav__link"), function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-key") === key);
    });
    /* open the Services group if a child is active */
    var p = D.pages[key];
    if (p && p.parent) { var par = document.querySelector(".nav__parent[data-key='" + p.parent + "']"); if (par) par.classList.add("is-open"); }
  }
  function refreshNavScore(key) {
    var a = document.querySelector(".nav__link[data-key='" + key + "'] .nav__score");
    if (a) { var s = scoreModel(key, true); a.textContent = s.overall; }
  }

  /* ---------- website mockup helpers ---------- */
  function slugify(t) { return (t || "block").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  var MEDIA_TYPES = { hero: 1, intro: 1, story: 1, mission: 1, "what-it-is": 1, "why-it-matters": 1, dignity: 1, "why-us": 1, "what-s-included": 1, "who-it-s-for": 1, values: 1, audience: 1, safety: 1, "why-work-here": 1, guidance: 1, "service-area": 1, landscape: 1 };
  function hasMedia(slug) { return !!MEDIA_TYPES[slug]; }
  var PIC_SVG = "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.35' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='3'/><circle cx='8.5' cy='8.5' r='1.7'/><path d='m21 15-5-5L5 21'/></svg>";
  function mediaFor() { var m = el("div", "block__media"); m.setAttribute("contenteditable", "false"); m.innerHTML = "<span class='block__ph'>" + PIC_SVG + "</span>"; return m; }
  var NAVITEMS = [["home", "Home"], ["about", "About"], ["services", "Services"], ["blog", "Blog"], ["careers", "Careers"], ["contact", "Contact"]];
  function siteNav(activeKey) {
    var ap = D.pages[activeKey], parent = ap && ap.parent;
    var links = NAVITEMS.map(function (it) {
      var on = (it[0] === activeKey || it[0] === parent);
      return "<span class='site-nav__link" + (on ? " is-active" : "") + "'>" + it[1] + "</span>";
    }).join("");
    var n = el("div", "site-nav"); n.setAttribute("contenteditable", "false");
    n.innerHTML = "<span class='site-nav__logo'>Candor Living</span><nav class='site-nav__links'>" + links + "</nav><span class='site-nav__cta'>Request Care</span>";
    return n;
  }
  function siteFooter() {
    var f = el("div", "site-foot"); f.setAttribute("contenteditable", "false");
    f.innerHTML =
      "<div class='site-foot__top'>" +
        "<div class='site-foot__brand'><strong>Candor Living</strong><p>Compassionate, non-medical home care. Serving Houston and the surrounding area.</p>" +
          "<div class='site-foot__social'><span>f</span><span>in</span><span>X</span></div></div>" +
        "<div class='site-foot__col'><h4>Services</h4><a>24-Hour Home Care</a><a>Respite Care</a><a>Personal Care</a><a>Companionship</a><a>Home Support</a></div>" +
        "<div class='site-foot__col'><h4>Company</h4><a>About Us</a><a>Careers</a><a>Blog</a><a>Contact</a></div>" +
        "<div class='site-foot__col'><h4>Get in touch</h4><a>(713) 730-5017</a><a>info@candorlivinghcs.com</a><a>1919 Taylor St, Houston TX</a></div>" +
      "</div>" +
      "<div class='site-foot__bar'><span>&copy; 2026 Candor Living Home Care Service</span><span>Privacy Policy &nbsp;&middot;&nbsp; Accessibility</span></div>";
    return f;
  }

  /* ---------- render page (center) ---------- */
  var current = null;
  function renderPage(key) {
    var p = D.pages[key]; if (!p) { key = "home"; p = D.pages.home; }
    current = key;
    var m = getModel(key);
    var canvas = $("#canvas"); canvas.innerHTML = "";
    var doc = el("div", "doc");

    /* head */
    var head = el("div", "pagehead");
    head.innerHTML = "<span class='pagehead__eyebrow'>" + (p.group === "pages" ? "Live website preview" : "Brand reference") + "</span>" +
      "<h1 class='pagehead__title'>" + p.nav + "</h1>" +
      (p.url ? "<p class='pagehead__url'>" + (p.url.charAt(0) === "#" ? "Internal reference" : "candorlivinghcs.com" + p.url) + "</p>" : "");
    doc.appendChild(head);

    /* SEO meta card (content + strategy only) */
    if (p.kind === "content") {
      var meta = el("div", "metacard");
      meta.innerHTML =
        "<div class='metacard__row'><div class='metacard__lab'>SEO Title <span class='count' id='ct-title'></span></div>" +
        "<input class='metafield t-title' id='seo-title' type='text' value=\"" + (m.seoTitle || "").replace(/"/g, "&quot;") + "\"></div>" +
        "<div class='metacard__row'><div class='metacard__lab'>Meta Description <span class='count' id='ct-meta'></span></div>" +
        "<textarea class='metafield' id='seo-meta' rows='2'>" + (m.meta || "") + "</textarea></div>";
      doc.appendChild(meta);
    }

    /* blocks = real website sections, wrapped in a site frame (nav + footer) */
    var blocks = el("div", "blocks"); blocks.id = "blocks";
    var mediaCount = 0;
    m.blocks.forEach(function (b) {
      var side = null;
      if (p.group === "pages" && hasMedia(slugify(b.type))) { side = (mediaCount % 2 === 0) ? "right" : "left"; mediaCount++; }
      blocks.appendChild(renderBlock(b, side));
    });
    var site = el("div", "site" + (p.group === "pages" ? "" : " site--ref"));
    if (p.group === "pages") site.appendChild(siteNav(key));
    site.appendChild(blocks);
    if (p.group === "pages") site.appendChild(siteFooter());
    doc.appendChild(site);
    canvas.appendChild(doc);

    /* wire editing */
    if (p.kind === "content") {
      var ti = $("#seo-title"), me = $("#seo-meta");
      [ti, me].forEach(function (f) { if (f) f.addEventListener("input", onEdit); });
    }
    Array.prototype.forEach.call(document.querySelectorAll(".block__body"), function (body) {
      body.addEventListener("input", onEdit);
    });
    enableDrag(blocks, key);

    /* crumb + rail */
    $("#crumb-page").textContent = p.nav;
    renderRail(key);
    setActiveNav(key);
    highlightAll(key);
    canvas.scrollTop = 0;
    canvas.focus();
  }

  function renderBlock(b, side) {
    var slug = slugify(b.type);
    var bl = el("div", "block block--" + slug); bl.setAttribute("data-id", b.id); bl.setAttribute("draggable", "false");
    var bar = el("div", "block__bar");
    bar.innerHTML =
      "<span class='block__handle' title='Drag to reorder'><svg viewBox='0 0 24 24' width='16' height='16' fill='currentColor'><circle cx='9' cy='6' r='1.4'/><circle cx='15' cy='6' r='1.4'/><circle cx='9' cy='12' r='1.4'/><circle cx='15' cy='12' r='1.4'/><circle cx='9' cy='18' r='1.4'/><circle cx='15' cy='18' r='1.4'/></svg></span>" +
      "<span class='block__tag'>" + (b.type || "Block") + "</span>" +
      "<span class='block__label'>" + (b.label || "") + "</span>" +
      "<span class='block__tools'>" +
        "<button class='block__tool' data-act='up' title='Move up'><svg viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 15 6-6 6 6'/></svg></button>" +
        "<button class='block__tool' data-act='down' title='Move down'><svg viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg></button>" +
      "</span>";
    var body = el("div", "block__body"); body.setAttribute("contenteditable", "true"); body.spellcheck = false; body.innerHTML = b.html;
    var stage = el("div", "block__stage");
    if (side) { stage.classList.add("has-media", "media-" + side); stage.appendChild(mediaFor()); }
    stage.appendChild(body);
    bl.appendChild(bar); bl.appendChild(stage);

    /* move up/down */
    bar.querySelector("[data-act='up']").addEventListener("click", function () { moveBlock(bl, -1); });
    bar.querySelector("[data-act='down']").addEventListener("click", function () { moveBlock(bl, 1); });
    return bl;
  }
  function moveBlock(bl, dir) {
    var parent = bl.parentNode;
    if (dir < 0 && bl.previousElementSibling) parent.insertBefore(bl, bl.previousElementSibling);
    else if (dir > 0 && bl.nextElementSibling) parent.insertBefore(bl.nextElementSibling, bl);
    persist(current); flashSaved(false);
  }

  /* ---------- drag & drop reorder (handle-initiated) ---------- */
  function enableDrag(container, key) {
    var dragEl = null;
    Array.prototype.forEach.call(container.querySelectorAll(".block"), function (bl) {
      var handle = bl.querySelector(".block__handle");
      handle.addEventListener("mousedown", function () { bl.setAttribute("draggable", "true"); });
      handle.addEventListener("mouseup", function () { bl.setAttribute("draggable", "false"); });
      bl.addEventListener("dragstart", function (e) { dragEl = bl; bl.classList.add("is-dragging"); e.dataTransfer.effectAllowed = "move"; try { e.dataTransfer.setData("text/plain", bl.getAttribute("data-id")); } catch (x) {} });
      bl.addEventListener("dragend", function () { bl.classList.remove("is-dragging"); bl.setAttribute("draggable", "false"); Array.prototype.forEach.call(container.querySelectorAll(".is-over"), function (x) { x.classList.remove("is-over"); }); dragEl = null; persist(key); flashSaved(false); });
    });
    container.addEventListener("dragover", function (e) {
      e.preventDefault();
      var after = getAfter(container, e.clientY);
      Array.prototype.forEach.call(container.querySelectorAll(".is-over"), function (x) { x.classList.remove("is-over"); });
      if (!dragEl) return;
      if (after == null) { container.appendChild(dragEl); }
      else { container.insertBefore(dragEl, after); if (after.classList) after.classList.add("is-over"); }
    });
  }
  function getAfter(container, y) {
    var els = Array.prototype.slice.call(container.querySelectorAll(".block:not(.is-dragging)"));
    var closest = null, closestOff = -Infinity;
    els.forEach(function (child) {
      var box = child.getBoundingClientRect();
      var off = y - box.top - box.height / 2;
      if (off < 0 && off > closestOff) { closestOff = off; closest = child; }
    });
    return closest;
  }

  /* ---------- editing hooks ---------- */
  var editTimer = null;
  function onEdit() {
    flashSaved(false);
    clearTimeout(editTimer);
    editTimer = setTimeout(function () {
      persist(current);
      renderRail(current, true);
      updateMetaCounts();
      refreshNavScore(current);
      highlightAll(current);
    }, 140);
  }
  function updateMetaCounts() {
    var t = $("#seo-title"), m = $("#seo-meta");
    if (t) { var lt = t.value.length; var c = $("#ct-title"); if (c) { c.textContent = lt + " / 60"; c.className = "count " + (lt >= 30 && lt <= 60 ? "ok" : "warn"); } }
    if (m) { var lm = m.value.length; var c2 = $("#ct-meta"); if (c2) { c2.textContent = lm + " / 160"; c2.className = "count " + (lm >= 120 && lm <= 160 ? "ok" : "warn"); } }
  }

  /* ---------- AI detection (ZeroGPT via proxy) ---------- */
  function aiCard() {
    var card = el("div", "rail__card");
    card.innerHTML =
      "<p class='rail__h'>AI Detection <span class='hint'>ZeroGPT</span></p>" +
      "<div class='ai__result' id='ai-result'><span class='ai__idle'>Scan this page's content to check it reads as human-written.</span></div>" +
      "<button class='ai__btn' id='ai-run'>Run AI scan</button>";
    card.querySelector("#ai-run").addEventListener("click", runAiScan);
    return card;
  }
  function runAiScan() {
    var box = $("#ai-result"), btn = $("#ai-run"); if (!box) return;
    var text = ""; Array.prototype.forEach.call(document.querySelectorAll("#canvas .block__body"), function (b) { text += " " + b.textContent; });
    text = text.replace(/\s+/g, " ").trim();
    box.innerHTML = "<span class='ai__idle'>Scanning…</span>"; if (btn) btn.disabled = true;
    fetch(AI_PROXY + "/detect", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: text }) })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (btn) btn.disabled = false;
        if (d && d.configured === false) { box.innerHTML = "<span class='ai__idle'>" + (d.message || "AI detection isn't configured yet.") + "</span>"; return; }
        if (d && d.error) { box.innerHTML = "<span class='ai__err'>" + d.error + "</span>"; return; }
        var ai = (d && d.aiPercentage) || 0, human = d && d.isHuman;
        box.innerHTML =
          "<div class='ai__pct " + (human ? "is-human" : "is-ai") + "'>" + ai + "<small>% AI</small></div>" +
          "<div class='ai__verdict " + (human ? "is-human" : "is-ai") + "'>" + (human ? "Content appears human-written" : escAttr(d.feedback || "May read as AI-generated")) + "</div>";
      })
      .catch(function () { if (btn) btn.disabled = false; box.innerHTML = "<span class='ai__err'>Could not reach the detector. Try again shortly.</span>"; });
  }

  /* ---------- right rail ---------- */
  function renderRail(key, live) {
    var p = D.pages[key]; var rail = $("#rail"); rail.innerHTML = "";

    if (p.kind === "branding") { $("#scorepill").hidden = true; rail.appendChild(brandRef()); return; }

    var s = scoreModel(key, !!live);

    if (p.kind === "content") {
      $("#scorepill").hidden = false; $("#scorepill-num").textContent = s.overall;
      rail.appendChild(scoreCard(s));
      rail.appendChild(aiCard());
    } else { $("#scorepill").hidden = true; }

    if (p.competitors) rail.appendChild(compCard(p.competitors));
    if (p.keywords) rail.appendChild(kwCard(key, s));
    updateMetaCounts();
  }

  function scoreCard(s) {
    var card = el("div", "rail__card");
    var band = s.overall >= 70 ? "var(--good)" : s.overall >= 45 ? "var(--gold)" : "var(--coral)";
    card.innerHTML =
      "<p class='rail__h'>Content Score <span class='hint'>live</span></p>" +
      "<div class='gauge'>" +
        "<svg viewBox='0 0 180 104'>" +
          "<defs><linearGradient id='gg' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-color='#FD5757'/><stop offset='.55' stop-color='#CBB38A'/><stop offset='1' stop-color='#1FC8E0'/></linearGradient></defs>" +
          "<path class='gauge__track' d='M14 96 A76 76 0 0 1 166 96'/>" +
          "<path class='gauge__val' id='gauge-arc' d='M14 96 A76 76 0 0 1 166 96' stroke='url(#gg)'/>" +
        "</svg>" +
        "<div class='gauge__num' style='color:" + band + "'>" + s.overall + "</div>" +
        "<div class='gauge__cap'>out of 100</div>" +
      "</div>" +
      "<div class='submetrics'>" +
        sm("Title", Math.round(s.TITLE * 100) + "%", s.TITLE) +
        sm("Headings", Math.round(s.HEAD * 100) + "%", s.HEAD) +
        sm("Terms", Math.round(s.TERMS * 100) + "%", s.TERMS) +
        smWords(s.words, s.target) +
      "</div>";
    setTimeout(function () {
      var arc = $("#gauge-arc"); if (!arc) return;
      var len = arc.getTotalLength(); arc.style.strokeDasharray = len;
      arc.style.strokeDashoffset = len; arc.getBoundingClientRect();
      arc.style.strokeDashoffset = len * (1 - s.overall / 100);
    }, 20);
    return card;
  }
  function sm(lab, val, ratio) {
    return "<div class='sm'><div class='sm__lab'>" + lab + "</div><div class='sm__val'>" + val + "</div>" +
      "<div class='sm__bar'><i style='width:" + Math.round(ratio * 100) + "%'></i></div></div>";
  }
  function smWords(w, target) {
    var ratio = target ? Math.min(1, w / target) : 1;
    return "<div class='sm'><div class='sm__lab'>Words</div><div class='sm__val'>" + w + " <small>@ " + (target || "—") + "</small></div>" +
      "<div class='sm__bar'><i style='width:" + Math.round(ratio * 100) + "%'></i></div></div>";
  }

  function compCard(list) {
    var card = el("div", "rail__card");
    var rows = list.slice(0, 3).map(function (c, i) {
      return "<a class='comp' href='" + escAttr(c.url) + "' target='_blank' rel='noopener' title='" + escAttr((c.name || "") + (c.note ? " — " + c.note : "")) + "'>" +
        "<span class='comp__rank'>" + (i + 1) + "</span>" +
        "<span class='comp__meta'><span class='comp__name'>" + c.name + "</span><span class='comp__dom'>" + c.domain + "</span></span>" +
        "<span class='comp__link'><svg viewBox='0 0 24 24' width='15' height='15' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M7 17 17 7M8 7h9v9'/></svg></span></a>";
    }).join("");
    card.innerHTML = "<p class='rail__h'>Top 3 Competitors <span class='hint'>ValueSERP · Houston</span></p>" + rows;
    return card;
  }

  var kwTab = "basic";
  function kwCard(key, s) {
    var p = D.pages[key];
    var card = el("div", "rail__card");
    var basic = s.per.filter(function (x) { return x.tier === "basic"; });
    var ext = s.per.filter(function (x) { return x.tier === "extended"; });
    card.innerHTML =
      "<p class='rail__h'>" + (p.kind === "strategy" ? "Target Keywords" : "Keywords") + " <span class='hint'>ValueSERP</span></p>" +
      "<div class='kwtabs'>" +
        "<button class='kwtab" + (kwTab === "basic" ? " is-on" : "") + "' data-tab='basic'>Basic <span class='n'>" + basic.length + "</span></button>" +
        "<button class='kwtab" + (kwTab === "extended" ? " is-on" : "") + "' data-tab='extended'>Extended <span class='n'>" + ext.length + "</span></button>" +
      "</div><div class='kwlist' id='kwlist'></div>";
    var listWrap = card.querySelector("#kwlist");
    function paint() {
      var arr = kwTab === "basic" ? basic : ext;
      listWrap.innerHTML = arr.map(function (k) { return kwChip(k, p.kind === "strategy"); }).join("");
      Array.prototype.forEach.call(listWrap.querySelectorAll(".kw"), function (chip) {
        chip.addEventListener("mouseenter", function () { highlightTerm(chip.getAttribute("data-term")); });
        chip.addEventListener("mouseleave", clearHighlight);
      });
    }
    card.querySelectorAll(".kwtab").forEach(function (t) {
      t.addEventListener("click", function () {
        kwTab = t.getAttribute("data-tab");
        card.querySelectorAll(".kwtab").forEach(function (x) { x.classList.toggle("is-on", x === t); });
        paint();
      });
    });
    paint();
    return card;
  }
  function kwChip(k, isTarget) {
    var term = k.term.replace(/'/g, "");
    if (isTarget || k.min === 0) return "<span class='kw is-target' data-term='" + term + "'>" + k.term + "</span>";
    var cls = (k.status === "todo" && k.tier === "basic") ? "is-miss" : "is-" + k.status;
    return "<span class='kw " + cls + "' data-term='" + term + "'>" + k.term +
      " <b class='kw__c'>" + k.count + "/" + k.min + (k.max ? "-" + k.max : "+") + "</b></span>";
  }

  /* ---------- content highlight (CSS Custom Highlight API, non-destructive) ---------- */
  var HL_OK = typeof CSS !== "undefined" && CSS.highlights;
  function highlightTerm(term) {
    if (!HL_OK) return;
    clearHighlight();
    var tokens = norm(term).split(" ").filter(Boolean); if (!tokens.length) return;
    var gap = "[\\s\\-\\u2010-\\u2015]+";
    var pat = tokens.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("(?:" + gap + "\\w+){0,2}" + gap);
    var re = new RegExp("(?:^|[^A-Za-z0-9])(" + pat + ")(?![A-Za-z0-9])", "gi");
    var ranges = [];
    Array.prototype.forEach.call(document.querySelectorAll("#canvas .block__body"), function (body) {
      var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
      var node;
      while ((node = walker.nextNode())) {
        var txt = node.nodeValue, m;
        re.lastIndex = 0;
        while ((m = re.exec(txt))) {
          var start = m.index + (m[0].length - m[1].length);
          try { var r = document.createRange(); r.setStart(node, start); r.setEnd(node, start + m[1].length); ranges.push(r); } catch (e) {}
          if (m.index === re.lastIndex) re.lastIndex++;
        }
      }
    });
    if (ranges.length && window.Highlight) {
      try { var h = new Highlight(); ranges.forEach(function (r) { h.add(r); }); CSS.highlights.set("kw", h); } catch (x) {}
    }
  }
  function clearHighlight() { if (HL_OK) CSS.highlights.delete("kw"); }
  /* persistent auto-highlight of ALL keyword occurrences in content (updates on edit) */
  function highlightAll(key) {
    if (!HL_OK) return;
    var p = D.pages[key];
    if (!p || !p.keywords || p.kind === "branding") { try { CSS.highlights.delete("kwauto"); } catch (e) {} return; }
    var terms = [];
    ["basic", "extended"].forEach(function (t) { (p.keywords[t] || []).forEach(function (k) { if (k.min > 0) terms.push(k.term); }); });
    var ranges = [];
    Array.prototype.forEach.call(document.querySelectorAll("#canvas .block__body"), function (body) {
      var nodes = [], walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null), nd;
      while ((nd = walker.nextNode())) nodes.push(nd);
      terms.forEach(function (term) {
        var tokens = norm(term).split(" ").filter(Boolean); if (!tokens.length) return;
        var gap = "[\\s\\-\\u2010-\\u2015]+";
        var pat = tokens.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("(?:" + gap + "\\w+){0,2}" + gap);
        var re = new RegExp("(?:^|[^A-Za-z0-9])(" + pat + ")(?![A-Za-z0-9])", "gi");
        nodes.forEach(function (node) {
          var txt = node.nodeValue, m; re.lastIndex = 0;
          while ((m = re.exec(txt))) {
            var start = m.index + (m[0].length - m[1].length);
            try { var r = document.createRange(); r.setStart(node, start); r.setEnd(node, start + m[1].length); ranges.push(r); } catch (e) {}
            if (m.index === re.lastIndex) re.lastIndex++;
          }
        });
      });
    });
    try { if (ranges.length) { var h = new Highlight(); ranges.forEach(function (r) { h.add(r); }); CSS.highlights.set("kwauto", h); } else CSS.highlights.delete("kwauto"); } catch (e) {}
  }

  /* ---------- brand quick-ref rail ---------- */
  function brandRef() {
    var card = el("div", "rail__card");
    var chips = D.brand.palette.map(function (c) { return "<span style='background:" + c.hex + "' title='" + c.name + " " + c.hex + "'></span>"; }).join("");
    var rows = D.brand.palette.map(function (c) { return "<div class='qref-row'><b>" + c.name + "</b><code>" + c.hex + "</code></div>"; }).join("");
    card.innerHTML = "<p class='rail__h'>Brand Quick Reference</p>" +
      "<div class='qref'>" + chips + "</div>" + rows +
      "<div class='qref-row' style='margin-top:8px'><b>Display</b><code>" + D.brand.type.display.name + "</code></div>" +
      "<div class='qref-row'><b>Body</b><code>" + D.brand.type.body.name + "</code></div>";
    return card;
  }

  /* ---------- save / reset ---------- */
  function flashSaved(saved) {
    var b = $("#btn-save"); if (!b) return;
    if (saved) { b.classList.add("is-saved"); $(".ebar__btn--primary span").textContent = "Saved"; setTimeout(function () { b.classList.remove("is-saved"); $(".ebar__btn--primary span") && ($(".ebar__btn--primary span").textContent = "Save"); }, 1400); }
  }

  /* ---------- routing ---------- */
  function route() {
    var key = (location.hash || "#home").slice(1);
    if (!D.pages[key]) key = "home";
    renderPage(key);
    closeMobileNav();
  }

  /* ---------- mobile nav ---------- */
  function closeMobileNav() { $("#side").classList.remove("is-open"); $("#app").classList.remove("nav-open"); }

  /* ---------- boot ---------- */
  function boot() {
    buildNav();
    if (!location.hash) location.hash = "#home"; else route();
    if (location.hash === "#home") route();
    window.addEventListener("hashchange", route);

    $("#logout").addEventListener("click", function () { sessionStorage.removeItem("cl_portal"); location.reload(); });
    $("#burger").addEventListener("click", function () { $("#side").classList.toggle("is-open"); $("#app").classList.toggle("nav-open"); });
    $("#app").addEventListener("click", function (e) { if (e.target === $("#app")) closeMobileNav(); });
    $("#btn-save").addEventListener("click", function () { persist(current); flashSaved(true); });
    $("#btn-reset").addEventListener("click", function () {
      if (!confirm("Reset this page to the original content? Your edits on this page will be cleared.")) return;
      localStorage.removeItem(LS + current); renderPage(current);
    });
  }

  /* ---------- auth gate ---------- */
  var gate = $("#gate"), app = $("#app"), form = $("#gate-form"), input = $("#gate-pass"), err = $("#gate-error");
  function unlock() {
    sessionStorage.setItem("cl_portal", "1");
    gate.classList.add("is-unlocked");
    setTimeout(function () { gate.style.display = "none"; }, 600);
    app.hidden = false;
    setTimeout(boot, 0);
  }
  $("#gate-eye").addEventListener("click", function () {
    input.type = input.type === "password" ? "text" : "password"; input.focus();
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    sha256(input.value.trim()).then(function (h) {
      if (h === PASS_HASH) { unlock(); }
      else { err.hidden = false; gate.classList.add("is-shake"); setTimeout(function () { gate.classList.remove("is-shake"); }, 450); input.select(); }
    });
  });
  if (sessionStorage.getItem("cl_portal") === "1") { gate.style.display = "none"; gate.classList.add("is-unlocked"); app.hidden = false; setTimeout(boot, 0); }

})();
