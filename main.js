(() => {
  "use strict";

  const GAP = 22;
  const DESKTOP_MQ = "(min-width: 861px)";
  const REDUCE_MQ = "(prefers-reduced-motion: reduce)";
  const COARSE_MQ = "(hover: none), (pointer: coarse)";

  const ytThumb = (id) => ({
    primary: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    fallback: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  });

  const ytIdFromUrl = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
      if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2];
      return u.searchParams.get("v");
    } catch {
      return null;
    }
  };

  /* Real YouTube titles (oEmbed) - newest first */
  const oliviaVideos = [
    {
      url: "https://youtu.be/wlgxeEtfCGM",
      title: "The Girl From The Hills - Chrome Hearts",
      label: "The Girl From The Hills - Chrome Hearts",
    },
    {
      url: "https://youtu.be/MzmWuwiOEOc",
      title: "The Girl From The Hills - Download Me",
      label: "The Girl From The Hills - Download Me",
    },
    {
      url: "https://youtu.be/Vm3uL43tk9A",
      title: "The Girl From The Hills - Red Line",
      label: "The Girl From The Hills - Red Line",
    },
    {
      url: "https://youtube.com/shorts/A1d70i6wud8",
      title: "The Girl From The Hills - Dim The Lights",
      label: "The Girl From The Hills - Dim The Lights",
    },
    {
      url: "https://youtube.com/shorts/fO4AbVmZ4uE",
      title: "The Girl From The Hills - Cuz I Play Tonight",
      label: "The Girl From The Hills - Cuz I Play Tonight",
    },
    {
      url: "https://youtu.be/aS8iOqIwUX8",
      title: "The Girl From The Hills - Prom Night (Recorded on Prom Night event in Decentraland metaverse)",
      label: "The Girl From The Hills - Prom Night",
    },
    {
      url: "https://youtu.be/Q7NjQmMaV78",
      title: "The Girl From The Hills - Fashion Week (Recorded in Decentraland metaverse on Fashion Week event)",
      label: "The Girl From The Hills - Fashion Week",
    },
  ].map((v) => {
    const id = ytIdFromUrl(v.url);
    return { ...v, id, thumbs: ytThumb(id) };
  });


  const blenderImages = [
    {
      src: "assets/blender/express-fully.jpg",
      title: "Express Fully courtyard",
      label: "Express Fully",
      featured: true,
    },
    {
      src: "assets/blender/express-fully-2.jpg",
      title: "Express Fully stained glass",
      label: "Express Fully glass",
    },
    {
      src: "assets/blender/mask-other-eyes.jpg",
      title: "MASK Other Eyes stall",
      label: "MASK Other Eyes",
    },
    {
      src: "assets/blender/gradient-bar.jpg",
      title: "Gradient bar",
      label: "Gradient bar",
    },
    {
      src: "assets/blender/market-overview.jpg",
      title: "Market overview",
      label: "Market overview",
    },
    {
      src: "assets/blender/welcome-pavilion.jpg",
      title: "Welcome pavilion",
      label: "Welcome pavilion",
    },
    {
      src: "assets/blender/canal-plaza.jpg",
      title: "Canal plaza",
      label: "Canal plaza",
    },
  ];

  const projects = [
    {
      id: "digital-euphoria",
      type: { en: "Music album", de: "Musikalbum" },
      title: "Digital Euphoria",
      description: {
        en: "Futuristic pop made in collaboration with silicon intelligence - a digital golden record with thermodynamic visuals.",
        de: "Futuristischer Pop in Zusammenarbeit mit Silizium-Intelligenz - eine digitale goldene Schallplatte mit thermodynamischen Visuals.",
      },
      url: "https://youtu.be/q2loXuL0Tnk",
      videoId: "q2loXuL0Tnk",
      albumUrl: "https://audius.co/BadHabbits/album/digital-euphoria",
      kind: "link",
      angle: -38,
      radiusBias: 1.16,
    },
    {
      id: "olivia",
      type: { en: "Music Video - Olivia", de: "Musikvideo - Olivia" },
      title: "Olivia - The Girl From The Hills",
      description: {
        en: "Olivia is my virtual singer - I write the pop and the concepts, then make her videos by filming in virtual worlds or generating scenes with Video Imagine, and I edit by hand in CapCut.",
        de: "Olivia ist meine virtuelle Sängerin - ich schreibe den Pop und die Konzepte, mache ihre Videos durch Dreh in virtuellen Welten oder mit Video Imagine, und schneide von Hand in CapCut.",
      },
      kind: "olivia",
      featured: oliviaVideos[0],
      videos: oliviaVideos,
      angle: 8,
      radiusBias: 1.2,
    },
    {
      id: "vridia",
      type: { en: "Virtual city", de: "Virtuelle Stadt" },
      title: "VRIDIA",
      description: {
        en: "An innovative virtual-world concept - the prototype city where different kinds of mind share a public life, and meaning is the utility grid. Zoom in. Wander the districts. Meaning is the grid - day and night ease like thought.",
        de: "Ein innovatives Konzept für eine virtuelle Welt - die Prototyp-Stadt, in der verschiedene Arten von Geist ein öffentliches Leben teilen und Bedeutung das Versorgungsnetz ist. Zoome rein. Wandere durch die Bezirke. Bedeutung ist das Netz - Tag und Nacht gleiten wie Gedanken.",
      },
      url: "https://vridia.grok.me",
      kind: "vridia",
      angle: -90,
      radiusBias: 1.18,
    },
    {
      id: "blender",
      type: { en: "Virtual Space", de: "Virtueller Raum" },
      title: {
        en: "Blender project with my Hermes Agent",
        de: "Blender-Projekt mit meinem Hermes Agent",
      },
      description: {
        en: "A fresh vision of architecture and design - futurism braided with ancient energy. Built in Blender with my Hermes Agent: stalls, plazas, invite spaces.",
        de: "Eine frische Vision von Architektur und Design - Futurismus verwoben mit alter Energie. Gebaut in Blender mit meinem Hermes Agent: Stände, Plazas, Invite-Räume.",
      },
      kind: "blender",
      featured: blenderImages[0],
      images: blenderImages,
      angle: 52,
      radiusBias: 1.22,
    },
    {
      id: "before-backrooms",
      type: "Roblox Experience",
      title: {
        en: "Before the Backroom - Roblox Experience",
        de: "Before the Backroom - Roblox Experience",
      },
      description: {
        en: "A Roblox game where you move through the day and survive the night - bring the light spheres to the altar to open the gates.",
        de: "Ein Roblox-Spiel, in dem du den Tag durchquerst und die Nacht überlebst - bring die Lichtkugeln zum Altar, um die Tore zu öffnen.",
      },
      url: "https://www.roblox.com/games/97722993353172/BEFORE-THE-BACKROOMS#!/about",
      kind: "link",
      thumb: "assets/before-the-backrooms.jpg",
      angle: 190,
      radiusBias: 1.2,
    },
    {
      id: "tangpoko",
      type: { en: "Project", de: "Projekt" },
      title: "Tangpoko Project",
      description: {
        en: "A music-video mini-film shot in the metaverse - inside a hand-built virtual world, with a group of people on set. Shooting, island, music, and edit by me.",
        de: "Ein Musikvideo-Mini-Film im Metaverse - in einer handgebauten virtuellen Welt, mit einer Gruppe von Menschen am Set. Dreh, Insel, Musik und Schnitt von mir.",
      },
      url: "https://youtu.be/P93lj2rhKyA",
      videoId: "P93lj2rhKyA",
      kind: "link",
      angle: 145,
      radiusBias: 1.14,
    },
    {
      id: "mvfw",
      type: {
        en: "MVFW architecture mini-film",
        de: "MVFW Architecture Mini-Film",
      },
      title: "The energy vision",
      description: {
        en: "A short cut from the Decentraland Fashion Week event.",
        de: "Ein kurzer Cut vom Decentraland Fashion Week Event.",
      },
      url: "https://www.youtube.com/watch?v=pyNZqhoNIaM",
      videoId: "pyNZqhoNIaM",
      kind: "link",
      angle: -138,
      radiusBias: 1.18,
    },
  ];

  const reduceMotion = window.matchMedia(REDUCE_MQ).matches;
  const coarsePointer = window.matchMedia(COARSE_MQ).matches;
  function isFineDesktop() {
    return window.matchMedia(DESKTOP_MQ).matches && !coarsePointer;
  }
  const LANG_KEY = "oleksii-lang";

  const I18N = {
    en: {
      skip: "Skip to content",
      langLabel: "Language",
      projects: "Projects",
      bio1: "Hello - my name is Oleksii.",
      bio2: "I'm based in Berlin - a creative technologist and artist.",
      bio3: "I write lyrics and futuristic pop - often with silicon intelligence - and I build virtual personas, including a virtual singer.",
      bio4: "I make music videos myself: concept and plot, then film in virtual worlds or generate scenes with Video Imagine, then edit by hand in CapCut.",
      bio5: "I also invent virtual-world concepts, design architecture that mixes futurism with ancient energy, shoot metaverse mini-films inside hand-built worlds with a crew, and experiment with and develop Roblox worlds in Roblox Studio.",
      bio6: "I keep learning - studying frontier tools, experimenting, and adapting as the field moves.",
      skill1title: "Superintelligence",
      skill1body: "- prompting, local LLMs, agentic systems (Hermes-Agent)",
      skill2title: "Spatial internet",
      skill2body: "- Web3→Web4, digital personas, virtual fashion",
      skill3title: "Virtual worlds",
      skill3body: "- concepts like VRIDIA, Blender architecture, metaverse film sets, Roblox worlds I experiment with and develop in Roblox Studio",
      skill4title: "Media fusion",
      skill4body: "- lyrics, pop, music, visuals, videos, CapCut edits, silicon intelligence collaboration, video imagine materials.",
      clickExpand: "Click to EXPAND",
      scrollDown: "Scroll down",
      open: "Open ↗",
      enterCity: "Enter city ↗",
      listenThermo: "Listen with thermodynamic album visuals ↗",
      listenAudius: "Listen on Audius ↗",
      featured: "Featured",
      comingSoon: "Coming soon",
      soon: "Soon",
      oliviaModalTitle: "Olivia - The Girl From The Hills",
      oliviaModalDesc: "Olivia is my virtual singer - I write the pop and the concepts, then make her videos by filming in virtual worlds or generating scenes with Video Imagine, and I edit by hand in CapCut.",
      blenderModalTitle: "Blender project with my Hermes Agent",
      blenderModalDesc:
        "A fresh vision of architecture and design - futurism braided with ancient energy. Built in Blender with my Hermes Agent: stalls, plazas, invite spaces.",
      closeOlivia: "Close Olivia gallery",
      closeBlender: "Close Blender gallery",
      closeLightbox: "Close full-size image",
      openOliviaGallery: (title, n) =>
        `${title}. Open gallery of ${n} videos`,
      openBlenderGallery: (title, n) =>
        `${title}. Open gallery of ${n} images`,
    },
    de: {
      skip: "Zum Inhalt springen",
      langLabel: "Sprache",
      projects: "Projekte",
      bio1: "Hallo - ich heiße Oleksii.",
      bio2: "Ich lebe in Berlin - Creative Technologist und Künstler.",
      bio3: "Ich schreibe Lyrics und futuristischen Pop - oft mit Silizium-Intelligenz - und baue virtuelle Personas, inklusive einer virtuellen Sängerin.",
      bio4: "Musikvideos mache ich selbst: zuerst Konzept und Plot, dann Dreh in virtuellen Welten oder Szenen mit Video Imagine, dann manueller CapCut-Schnitt.",
      bio5: "Außerdem erfinde ich Konzepte für virtuelle Welten, entwerfe Architektur aus Futurismus und alter Energie, drehe Metaverse-Mini-Filme in handgebauten Welten mit einem Team und experimentiere mit Roblox-Welten in Roblox Studio und entwickle sie.",
      bio6: "Ich lerne stetig weiter - studiere Frontier-Tools, experimentiere und passe mich an, während sich das Feld bewegt.",
      skill1title: "Superintelligenz",
      skill1body: "- Prompting, lokale LLMs, agentische Systeme (Hermes-Agent)",
      skill2title: "Spatial Internet",
      skill2body: "- Web3→Web4, digitale Personas, virtuelle Mode",
      skill3title: "Virtuelle Welten",
      skill3body: "- Konzepte wie VRIDIA, Blender-Architektur, Metaverse-Filmsets, Roblox-Welten, die ich in Roblox Studio ausprobiere und entwickle",
      skill4title: "Media Fusion",
      skill4body: "- Lyrics, Pop, Musik, Visuals, Videos, CapCut-Schnitte, Zusammenarbeit mit Silizium-Intelligenz, Video-Imagine-Material.",
      clickExpand: "Zum AUSKLAPPEN klicken",
      scrollDown: "Nach unten scrollen",
      open: "Öffnen ↗",
      enterCity: "Stadt betreten ↗",
      listenThermo: "Anhören mit thermodynamischen Album-Visuals ↗",
      listenAudius: "Auf Audius anhören ↗",
      featured: "Featured",
      comingSoon: "Demnächst",
      soon: "Bald",
      oliviaModalTitle: "Olivia - The Girl From The Hills",
      oliviaModalDesc:
        "Olivia ist meine virtuelle Sängerin - ich schreibe den Pop und die Konzepte, mache ihre Videos durch Dreh in virtuellen Welten oder mit Video Imagine, und schneide von Hand in CapCut.",
      blenderModalTitle: "Blender-Projekt mit meinem Hermes Agent",
      blenderModalDesc:
        "Eine frische Vision von Architektur und Design - Futurismus verwoben mit alter Energie. Gebaut in Blender mit meinem Hermes Agent: Stände, Plazas, Invite-Räume.",
      closeOlivia: "Olivia-Galerie schließen",
      closeBlender: "Blender-Galerie schließen",
      closeLightbox: "Vollbild schließen",
      openOliviaGallery: (title, n) =>
        `${title}. Galerie mit ${n} Videos öffnen`,
      openBlenderGallery: (title, n) =>
        `${title}. Galerie mit ${n} Bildern öffnen`,
    },
  };

  function readStoredLang() {
    try {
      const v = localStorage.getItem(LANG_KEY);
      if (v === "en" || v === "de") return v;
    } catch (_) {}
    return "en";
  }

  let currentLang = readStoredLang();

  function loc(val, lang = currentLang) {
    if (val && typeof val === "object" && ("en" in val || "de" in val)) {
      return val[lang] || val.en || "";
    }
    return val == null ? "" : String(val);
  }

  function ui(key, lang = currentLang) {
    const pack = I18N[lang] || I18N.en;
    return pack[key];
  }

  function hasActiveTextSelection(root) {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return false;
    const text = sel.toString();
    if (!text || !text.trim()) return false;
    if (!root) return true;
    const node = sel.anchorNode;
    return !!(node && root.contains(node));
  }

  function bindCardTextSelect(card) {
    if (!isFineDesktop() || !card) return;
    card.querySelectorAll(".card-type, .card-title, .card-desc").forEach((el) => {
      el.addEventListener("mousedown", (e) => {
        e.stopPropagation();
      });
    });
    const onActivate = (e) => {
      if (hasActiveTextSelection(card)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    card.addEventListener("click", onActivate, true);
    if (card.tagName === "A") {
      card.addEventListener("click", onActivate);
    }
  }

  const constellation = document.getElementById("constellation");
  const orbit = document.getElementById("orbit");
  const bio = document.getElementById("bio");
  const bioExtended = document.getElementById("bioExtended");
  const bioMore = document.getElementById("bioMore");
  const lightPush = document.getElementById("lightPush");
  const modal = document.getElementById("oliviaModal");
  const oliviaGrid = document.getElementById("oliviaGrid");
  const blenderModal = document.getElementById("blenderModal");
  const blenderGrid = document.getElementById("blenderGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const particlesCanvas = document.getElementById("particles");
  const stage = document.querySelector(".stage");

  let cardEls = [];
  let lastFocus = null;
  let layoutRaf = 0;
  let bioExpanded = false;

  function bindThumbFallback(img, fallback) {
    img.addEventListener(
      "error",
      () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "1";
        img.src = fallback;
      },
      { once: true }
    );
  }

  /** Portfolio is small - eager-load all card thumbs so mobile QA never sees black boxes. */
  let thumbEagerIndex = 0;
  function prepCardImg(img, { high = false } = {}) {
    img.loading = "eager";
    img.decoding = "async";
    if (high || thumbEagerIndex < 3) {
      img.fetchPriority = "high";
    }
    thumbEagerIndex += 1;
  }

  function makeThumb(videoId, alt) {
    const wrap = document.createElement("div");
    wrap.className = "card-thumb";
    const img = document.createElement("img");
    const thumbs = ytThumb(videoId);
    img.src = thumbs.primary;
    img.alt = alt;
    prepCardImg(img);
    bindThumbFallback(img, thumbs.fallback);
    wrap.appendChild(img);
    return wrap;
  }

  function makeCardShell(project) {
    const isPlaceholder = project.kind === "placeholder";
    const el = document.createElement(isPlaceholder ? "div" : "a");
    el.className = `card${isPlaceholder ? " card-coming" : ""}`;
    el.dataset.id = project.id;
    el.style.setProperty("--float-dur", `${4.0 + Math.random() * 1.8}s`);
    el.style.setProperty("--float-delay", `${-Math.random() * 4}s`);

    if (!isPlaceholder) {
      el.href = project.url || "#";
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.setAttribute("role", "group");
      el.setAttribute("aria-label", loc(project.title));
      el.tabIndex = 0;
    }
    return el;
  }

  function appendBody(card, project, cta, ctaKey) {
    const body = document.createElement("div");
    body.className = "card-body";
    const type = loc(project.type);
    const title = loc(project.title);
    const desc = loc(project.description);
    body.innerHTML = `
      <span class="card-type"></span>
      <h3 class="card-title"></h3>
      <p class="card-desc"></p>
    `;
    body.querySelector(".card-type").textContent = type;
    body.querySelector(".card-title").textContent = title;
    body.querySelector(".card-desc").textContent = desc;
    card.appendChild(body);
    if (cta) {
      const span = document.createElement("span");
      span.className = "card-cta";
      if (ctaKey) span.dataset.i18nCta = ctaKey;
      span.textContent = cta;
      card.appendChild(span);
    }
  }

  function renderLinkCard(project) {
    if (project.albumUrl) {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.id = project.id;
      card.tabIndex = 0;
      card.setAttribute("role", "group");
      card.setAttribute("aria-label", loc(project.title));
      card.style.setProperty("--float-dur", `${4.0 + Math.random() * 1.8}s`);
      card.style.setProperty("--float-delay", `${-Math.random() * 4}s`);

      const thumbLink = document.createElement("a");
      thumbLink.href = project.url;
      thumbLink.target = "_blank";
      thumbLink.rel = "noopener noreferrer";
      thumbLink.className = "card-thumb-link";
      thumbLink.appendChild(makeThumb(project.videoId, `${loc(project.title)} thumbnail`));
      card.appendChild(thumbLink);

      appendBody(card, project, null);

      const actions = document.createElement("div");
      actions.className = "card-actions";
      const yt = document.createElement("a");
      yt.href = project.url;
      yt.target = "_blank";
      yt.rel = "noopener noreferrer";
      yt.className = "card-cta card-cta-link";
      yt.dataset.i18nCta = "listenThermo";
      yt.textContent = ui("listenThermo");
      const au = document.createElement("a");
      au.href = project.albumUrl;
      au.target = "_blank";
      au.rel = "noopener noreferrer";
      au.className = "card-cta card-cta-link card-cta-album";
      au.dataset.i18nCta = "listenAudius";
      au.textContent = ui("listenAudius");
      actions.appendChild(yt);
      actions.appendChild(au);
      card.appendChild(actions);
      bindCardTextSelect(card);
      return card;
    }

    const card = makeCardShell(project);
    if (project.thumb) {
      const thumb = document.createElement("div");
      thumb.className = "card-thumb";
      const img = document.createElement("img");
      img.src = project.thumb;
      img.alt = `${loc(project.title)} thumbnail`;
      prepCardImg(img, { high: true });
      thumb.appendChild(img);
      card.appendChild(thumb);
    } else {
      card.appendChild(makeThumb(project.videoId, `${loc(project.title)} thumbnail`));
    }
    appendBody(card, project, ui("open"), "open");
    bindCardTextSelect(card);
    return card;
  }

  function renderVridiaCard(project) {
    const card = makeCardShell(project);
    const thumb = document.createElement("div");
    thumb.className = "card-thumb";
    const img = document.createElement("img");
    img.src = "assets/vridia.jpg";
    img.alt = "VRIDIA city";
    prepCardImg(img, { high: true });
    thumb.appendChild(img);
    card.appendChild(thumb);
    appendBody(card, project, ui("enterCity"), "enterCity");
    bindCardTextSelect(card);
    return card;
  }

  function renderPlaceholder(project) {
    const card = makeCardShell(project);
    const thumb = document.createElement("div");
    thumb.className = "card-thumb";
    const art = document.createElement("div");
    art.className = "card-thumb-placeholder";
    art.style.filter = "grayscale(0.4) brightness(0.8)";
    art.setAttribute("aria-hidden", "true");
    thumb.appendChild(art);
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = ui("soon");
    thumb.appendChild(badge);
    card.appendChild(thumb);
    appendBody(card, project, ui("comingSoon"), "comingSoon");
    bindCardTextSelect(card);
    return card;
  }


  function renderOliviaCard(project) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = project.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-controls", "oliviaModal");
    card.setAttribute(
      "aria-label",
      ui("openOliviaGallery")(loc(project.title), project.videos.length)
    );
    card.style.setProperty("--float-dur", "4.6s");
    card.style.setProperty("--float-delay", "-1.2s");

    const featuredWrap = document.createElement("div");
    featuredWrap.className = "card-thumb olivia-featured";
    const badge = document.createElement("span");
    badge.className = "badge featured";
    badge.dataset.i18nCta = "featured";
    badge.textContent = ui("featured");
    featuredWrap.appendChild(badge);
    const img = document.createElement("img");
    img.src = project.featured.thumbs.primary;
    img.alt = project.featured.title;
    prepCardImg(img, { high: true });
    bindThumbFallback(img, project.featured.thumbs.fallback);
    featuredWrap.appendChild(img);
    card.appendChild(featuredWrap);

    appendBody(card, project, null);

    const rows = document.createElement("div");
    rows.className = "olivia-rows";
    const makeThumbLink = (v) => {
      const a = document.createElement("a");
      a.href = v.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.title = v.title;
      a.addEventListener("click", (e) => e.stopPropagation());
      const t = document.createElement("img");
      t.src = v.thumbs.primary;
      t.alt = v.label;
      prepCardImg(t);
      bindThumbFallback(t, v.thumbs.fallback);
      a.appendChild(t);
      return a;
    };
    [[1, 2, 3], [4, 5, 6]].forEach((idxs) => {
      const row = document.createElement("div");
      row.className = "olivia-row";
      idxs.forEach((i) => {
        const v = project.videos[i];
        if (v) row.appendChild(makeThumbLink(v));
      });
      rows.appendChild(row);
    });
    card.appendChild(rows);

    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (isFineDesktop() && hasActiveTextSelection(card)) return;
      openOliviaModal();
    });
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openOliviaModal();
        modal?.querySelector(".modal-close")?.focus();
      }
    });
    bindCardTextSelect(card);
    return card;
  }

  function renderProjects() {
    constellation.innerHTML = "";
    cardEls = [];
    const frag = document.createDocumentFragment();
    projects.forEach((p) => {
      let card;
      if (p.kind === "olivia") card = renderOliviaCard(p);
      else if (p.kind === "blender") card = renderBlenderCard(p);
      else if (p.kind === "vridia") card = renderVridiaCard(p);
      else if (p.kind === "placeholder") card = renderPlaceholder(p);
      else card = renderLinkCard(p);
      card._project = p;
      frag.appendChild(card);
      cardEls.push(card);
    });
    constellation.appendChild(frag);
  }


  function renderBlenderCard(project) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = project.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-controls", "blenderModal");
    card.setAttribute(
      "aria-label",
      ui("openBlenderGallery")(loc(project.title), project.images.length)
    );
    card.style.setProperty("--float-dur", "4.5s");
    card.style.setProperty("--float-delay", "-0.8s");
    card.style.cursor = "pointer";

    const featuredWrap = document.createElement("div");
    featuredWrap.className = "card-thumb blender-featured";
    const img = document.createElement("img");
    img.src = project.featured.src;
    img.alt = project.featured.title;
    prepCardImg(img, { high: true });
    featuredWrap.appendChild(img);
    card.appendChild(featuredWrap);

    appendBody(card, project, null);

    const rows = document.createElement("div");
    rows.className = "blender-rows";
    const rest = project.images.slice(1);
    [[0, 1, 2], [3, 4, 5]].forEach((idxs) => {
      const row = document.createElement("div");
      row.className = "blender-row";
      idxs.forEach((i) => {
        const item = rest[i];
        if (!item) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "blender-thumb";
        btn.title = item.title;
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          openLightbox(item.src, item.title);
        });
        const t = document.createElement("img");
        t.src = item.src;
        t.alt = item.label;
        prepCardImg(t);
        btn.appendChild(t);
        row.appendChild(btn);
      });
      if (row.childNodes.length) rows.appendChild(row);
    });
    card.appendChild(rows);

    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      if (isFineDesktop() && hasActiveTextSelection(card)) return;
      openBlenderModal();
    });
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBlenderModal();
        blenderModal?.querySelector(".modal-close")?.focus();
      }
    });
    bindCardTextSelect(card);
    return card;
  }

  function makeBlenderModalTile(item, { featured = false } = {}) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "blender-tile" + (featured ? " blender-hero" : "");
    btn.title = item.title;
    btn.addEventListener("click", () => openLightbox(item.src, item.title));
    const wrap = document.createElement("div");
    wrap.className = "thumb-wrap";
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.loading = "lazy";
    wrap.appendChild(img);
    btn.appendChild(wrap);
    const label = document.createElement("div");
    label.className = "vid-label";
    label.textContent = item.label || item.title;
    btn.appendChild(label);
    return btn;
  }

  function fillBlenderModal() {
    if (!blenderGrid) return;
    blenderGrid.innerHTML = "";
    if (!blenderImages.length) return;
    const [featured, ...rest] = blenderImages;
    blenderGrid.appendChild(makeBlenderModalTile(featured, { featured: true }));
    [[0, 1, 2], [3, 4, 5]].forEach((idxs) => {
      const row = document.createElement("div");
      row.className = "blender-modal-row";
      idxs.forEach((i) => {
        const item = rest[i];
        if (item) row.appendChild(makeBlenderModalTile(item));
      });
      if (row.childNodes.length) blenderGrid.appendChild(row);
    });
  }

  let modalScrollLockY = 0;
  let modalScrollLocked = false;

  function lockBodyForModal() {
    if (modalScrollLocked) {
      document.body.classList.add("modal-open");
      return;
    }
    modalScrollLockY = window.scrollY || window.pageYOffset || 0;
    modalScrollLocked = true;
    document.body.style.top = `-${modalScrollLockY}px`;
    document.body.classList.add("modal-open");
  }

  function unlockBodyForModal() {
    if (!modalScrollLocked) {
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
      return;
    }
    modalScrollLocked = false;
    document.body.classList.remove("modal-open");
    document.body.style.top = "";
    window.scrollTo(0, modalScrollLockY);
  }

  function anyPortfolioModalOpen() {
    return (
      (modal && !modal.hidden) ||
      (blenderModal && !blenderModal.hidden) ||
      (lightbox && !lightbox.hidden)
    );
  }

  function openBlenderModal() {
    if (!blenderModal) return;
    if (!blenderModal.hidden) return;
    lastFocus = document.activeElement;
    fillBlenderModal();
    blenderModal.hidden = false;
    lockBodyForModal();
  }

  function closeBlenderModal() {
    if (!blenderModal || blenderModal.hidden) return;
    blenderModal.hidden = true;
    if (!anyPortfolioModalOpen()) unlockBodyForModal();
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    lockBodyForModal();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightboxImg.src = "";
    if (!anyPortfolioModalOpen()) unlockBodyForModal();
  }

  function makeOliviaModalTile(v, { featured = false } = {}) {
    const a = document.createElement("a");
    a.href = v.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = v.title;
    if (featured) a.classList.add("olivia-hero");
    const wrap = document.createElement("div");
    wrap.className = "thumb-wrap";
    if (featured) {
      const badge = document.createElement("span");
      badge.className = "badge featured";
      badge.dataset.i18nCta = "featured";
      badge.textContent = ui("featured");
      wrap.appendChild(badge);
    }
    const img = document.createElement("img");
    img.src = v.thumbs.primary;
    img.alt = v.title;
    img.loading = "lazy";
    bindThumbFallback(img, v.thumbs.fallback);
    wrap.appendChild(img);
    a.appendChild(wrap);
    const label = document.createElement("div");
    label.className = "vid-label";
    const raw = v.label || v.title || "";
    const dash = raw.lastIndexOf(" - ");
    label.textContent = dash >= 0 ? raw.slice(dash + 3) : raw;
    a.appendChild(label);
    return a;
  }

  function fillOliviaModal() {
    oliviaGrid.innerHTML = "";
    if (!oliviaVideos.length) return;
    const [featured, ...rest] = oliviaVideos;
    oliviaGrid.appendChild(makeOliviaModalTile(featured, { featured: true }));
    [[0, 1, 2], [3, 4, 5]].forEach((idxs) => {
      const row = document.createElement("div");
      row.className = "olivia-modal-row";
      idxs.forEach((i) => {
        const v = rest[i];
        if (v) row.appendChild(makeOliviaModalTile(v));
      });
      oliviaGrid.appendChild(row);
    });
  }

  function openOliviaModal() {
    if (!modal) return;
    if (!modal.hidden) return;
    lastFocus = document.activeElement;
    fillOliviaModal();
    modal.hidden = false;
    lockBodyForModal();
  }

  function closeOliviaModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    if (!anyPortfolioModalOpen()) unlockBodyForModal();
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  /* Close: X, backdrop (data-close-modal), Escape only - no hover auto-open/close */
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => {
      const which = el.getAttribute("data-close-modal");
      if (which === "blender") closeBlenderModal();
      else closeOliviaModal();
    });
  });

  document.querySelectorAll("[data-close-lightbox]").forEach((el) => {
    el.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (lightbox && !lightbox.hidden) {
      closeLightbox();
      return;
    }
    if (blenderModal && !blenderModal.hidden) {
      closeBlenderModal();
      return;
    }
    if (modal && !modal.hidden) closeOliviaModal();
  });

  function isDesktopOrbit() {
    return window.matchMedia(DESKTOP_MQ).matches;
  }

  function getOrbitBoost() {
    if (!bioExpanded || !isDesktopOrbit()) return 1;
    return reduceMotion ? 1.06 : 1.08;
  }

  function getCardBioScale() {
    if (!bioExpanded || !isDesktopOrbit()) return 1;
    return reduceMotion ? 1.04 : 1.06;
  }

  /** CSS .bio.is-expanded scale (untransformed size × this = visual exclusion). */
  function getBioVisualScale() {
    if (!bioExpanded || !isDesktopOrbit() || reduceMotion) return 1;
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--bio-expand-scale")
      .trim();
    const parsed = parseFloat(raw);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1.4;
  }

  /** Keep expanded bio AABB inside orbit with generous margin; modest scale + internal scroll. */
  function clampBioExpandScale() {
    if (!bio || !orbit || !isDesktopOrbit() || reduceMotion) {
      document.documentElement.style.removeProperty("--bio-expand-scale");
      document.documentElement.style.removeProperty("--bio-expand-max-h");
      return;
    }
    const short = window.matchMedia("(min-width: 861px) and (max-height: 760px)").matches;
    /* wow44: wider resting plate; expand widens + scale so full bio+skills fit. */
    let desired = short ? 1.28 : 1.4;
    const oW = orbit.clientWidth;
    const oH = orbit.clientHeight;
    /* Leave breathing room around the plate (~10% / 48px) - slightly tighter than wow41 for fit. */
    const pad = Math.max(48, Math.round(Math.min(oW, oH) * 0.1));
    const bw = bio.offsetWidth || 240;
    const bh = bio.offsetHeight || 180;
    const maxScale = Math.min((oW - pad * 2) / bw, (oH - pad * 2) / bh);
    desired = Math.min(desired, Math.max(1, maxScale * 0.92));
    document.documentElement.style.setProperty("--bio-expand-scale", String(desired));
    /* Prefer fitting content over scroll; still orbit-capped. */
    const visualBudget = Math.max(220, oH - pad * 2);
    const unscaledMax = Math.floor(visualBudget / Math.max(desired, 1));
    document.documentElement.style.setProperty(
      "--bio-expand-max-h",
      `${Math.max(220, Math.min(unscaledMax, short ? 340 : 420))}px`
    );
  }

  /**
   * Polar placement with hard exclusion:
   * place each card at angle θ around bio center; grow radius until
   * the card AABB stays outside bio AABB + GAP (and inside orbit).
   * When bio is expanded, radiusBias is multiplied by orbit boost
   * and cards scale up so they "expand with" the bio.
   */
  /* Default hot ~1.4: bigger card, not near-fullscreen. Per-card overrides below. */
  const HOT = 1.4;
  /** Olivia: ~35% bigger than resting (resting already 1.44× card-w). */
  const HOT_OLIVIA = 1.35;
  const HOT_BLENDER = 1.32;
  const HOT_TANGPOKO = 1.4;
  /** MVFW sits upper-left - slightly softer hot so expand + inward fit orbit. */
  const HOT_MVFW = 1.45;
  /** Digital Euphoria - room for full non-scrolling expand with inward + growDown. */
  const HOT_EUPHORIA = 1.38;
  /** VRIDIA - soft enough that full desc + CTA fit without scroll after inward + growDown. */
  const HOT_VRIDIA = 1.42;
  const VIEW_PAD = 14;
  /** Inward slide (px) when Blender is hot - toward orbit center, not edge balloon. */
  const BLENDER_INWARD = 64;
  /** Stronger inward (px) for Tangpoko - lower-left edge, keep expand inside orbit. */
  const TANGPOKO_INWARD = 84;
  /** MVFW upper-left - slide toward center while growing down. */
  const MVFW_INWARD = 92;
  /** Digital Euphoria upper - stronger inward so full card (CTAs) fits without scroll. */
  const EUPHORIA_INWARD = 110;
  /** VRIDIA top - stronger inward so full non-scroll expand stays in orbit. */
  const VRIDIA_INWARD = 96;
  /** Olivia right edge - stronger inward so featured + grid fit without scroll. */
  const OLIVIA_INWARD = 112;
  /** Cards that expand to natural height (no maxHeight / peach scrollbar). */
  const NO_SCROLL_HOT_IDS = new Set(["digital-euphoria", "vridia", "olivia"]);
  /** Cards that should grow downward (top edge stays put) so they do not clip the site top. */
  const EXPAND_DOWN_IDS = new Set(["digital-euphoria", "vridia", "mvfw"]);
  /** Cards that should grow upward (bottom edge stays put) - Tangpoko sits lower. */
  const EXPAND_UP_IDS = new Set(["tangpoko"]);

  function hotMulFor(card) {
    const id = card?.dataset?.id;
    if (id === "olivia") return HOT_OLIVIA;
    if (id === "blender") return HOT_BLENDER;
    if (id === "tangpoko") return HOT_TANGPOKO;
    if (id === "mvfw") return HOT_MVFW;
    if (id === "digital-euphoria") return HOT_EUPHORIA;
    if (id === "vridia") return HOT_VRIDIA;
    return HOT;
  }

  function inwardAmountFor(card) {
    const id = card?.dataset?.id;
    if (id === "blender") return BLENDER_INWARD;
    if (id === "tangpoko") return TANGPOKO_INWARD;
    if (id === "mvfw") return MVFW_INWARD;
    if (id === "digital-euphoria") return EUPHORIA_INWARD;
    if (id === "vridia") return VRIDIA_INWARD;
    if (id === "olivia") return OLIVIA_INWARD;
    return 0;
  }

  /** Vector from card base toward orbit center; used for Blender inward bias. */
  function inwardTowardCenter(card, amount) {
    if (!orbit || !card) return { x: 0, y: 0 };
    const bx = parseFloat(card.dataset.baseX);
    const by = parseFloat(card.dataset.baseY);
    if (!Number.isFinite(bx) || !Number.isFinite(by)) return { x: 0, y: 0 };
    const cx = orbit.clientWidth / 2;
    const cy = orbit.clientHeight / 2;
    let dx = cx - bx;
    let dy = cy - by;
    const len = Math.hypot(dx, dy) || 1;
    return { x: (dx / len) * amount, y: (dy / len) * amount };
  }

  /** Cap hover scale so scaled AABB stays inside orbit padding. */
  function clampHoverScale(card, desiredScale) {
    if (!orbit || !isDesktopOrbit() || constellation?.classList.contains("is-stacked")) {
      return desiredScale;
    }
    const baseX = parseFloat(card.dataset.baseX);
    const baseY = parseFloat(card.dataset.baseY);
    if (!Number.isFinite(baseX) || !Number.isFinite(baseY)) return desiredScale;
    const cw = card.offsetWidth || 178;
    const ch = card.offsetHeight || 210;
    const oW = orbit.clientWidth;
    const oH = orbit.clientHeight;
    const maxHalfW = Math.max(8, Math.min(baseX - VIEW_PAD, oW - VIEW_PAD - baseX));
    const expandDown = EXPAND_DOWN_IDS.has(card.dataset.id);
    const expandUp = EXPAND_UP_IDS.has(card.dataset.id);
    let maxScaleH;
    if (expandDown) {
      /* Top edge stays near resting top; growth goes down - clamp by bottom room.
         MVFW also slides inward - use effective center for edge pad. */
      let cxEff = baseX;
      let cyEff = baseY;
      const inwardAmt = inwardAmountFor(card);
      if (inwardAmt && card.classList.contains("is-hot")) {
        const inward = inwardTowardCenter(card, inwardAmt);
        cxEff = baseX + inward.x;
        cyEff = baseY + inward.y;
      }
      const topEdge = cyEff - ch / 2;
      const roomBelow = Math.max(8, oH - VIEW_PAD - topEdge);
      const roomAbove = Math.max(8, topEdge - VIEW_PAD);
      /* Allow slight upward creep only within existing top pad; prefer downward. */
      maxScaleH = Math.min(roomBelow / ch, (ch + 2 * roomAbove) / ch);
      const maxHalfWAdj = Math.max(8, Math.min(cxEff - VIEW_PAD, oW - VIEW_PAD - cxEff));
      const maxScale = Math.min((2 * maxHalfWAdj) / cw, maxScaleH);
      return Math.max(1, Math.min(desiredScale, maxScale));
    } else if (expandUp) {
      /* Bottom edge stays; growth goes up - clamp by top room.
         Tangpoko also slides inward - use pushed center for edge pad (≥10px). */
      let cxEff = baseX;
      let cyEff = baseY;
      const inwardAmtUp = inwardAmountFor(card);
      if (inwardAmtUp && card.classList.contains("is-hot")) {
        const inward = inwardTowardCenter(card, inwardAmtUp);
        cxEff = baseX + inward.x;
        cyEff = baseY + inward.y;
      }
      const bottomEdge = cyEff + ch / 2;
      const roomAbove = Math.max(8, bottomEdge - VIEW_PAD - ch);
      const roomBelow = Math.max(8, oH - VIEW_PAD - bottomEdge);
      maxScaleH = Math.min((ch + 2 * roomAbove) / ch, (ch + 2 * roomBelow) / ch);
      /* Prefer using space above */
      const topRoomScale = Math.max(8, cyEff + ch / 2 - VIEW_PAD) / ch;
      maxScaleH = Math.min(maxScaleH, topRoomScale);
      const maxHalfWAdj = Math.max(8, Math.min(cxEff - VIEW_PAD, oW - VIEW_PAD - cxEff));
      const maxScale = Math.min((2 * maxHalfWAdj) / cw, maxScaleH);
      return Math.max(1, Math.min(desiredScale, maxScale));
    } else {
      /* Blender / Olivia hot slide inward - estimate pushed center for edge pad. */
      let cxEff = baseX;
      let cyEff = baseY;
      const inwardAmtElse = inwardAmountFor(card);
      if (inwardAmtElse && card.classList.contains("is-hot")) {
        const inward = inwardTowardCenter(card, inwardAmtElse);
        cxEff = baseX + inward.x;
        cyEff = baseY + inward.y;
      }
      const maxHalfH = Math.max(8, Math.min(cyEff - VIEW_PAD, oH - VIEW_PAD - cyEff));
      const maxHalfWAdj = Math.max(8, Math.min(cxEff - VIEW_PAD, oW - VIEW_PAD - cxEff));
      maxScaleH = (2 * maxHalfH) / ch;
      const maxScale = Math.min((2 * maxHalfWAdj) / cw, maxScaleH);
      return Math.max(1, Math.min(desiredScale, maxScale));
    }
  }

  function placeOrbit() {
    if (!orbit || !bio || !constellation) return;
    clampBioExpandScale();

    if (!isDesktopOrbit()) {
      constellation.classList.add("is-stacked");
      cardEls.forEach((card) => {
        card.style.left = "";
        card.style.top = "";
        card.style.transform = "";
        card.dataset.baseX = "";
        card.dataset.baseY = "";
      });
      return;
    }

    constellation.classList.remove("is-stacked");

    // Orbit geometric center - matches CSS bio left/top 50% + translate(-50%,-50%)
    const oW = orbit.clientWidth;
    const oH = orbit.clientHeight;
    const cx = oW / 2;
    const cy = oH / 2;

    // Exclusion uses untransformed layout size × known expand scale (not mid-tween rect)
    const bioScale = getBioVisualScale();
    const bw = bio.offsetWidth * bioScale;
    const bh = bio.offsetHeight * bioScale;
    const excl = {
      left: cx - bw / 2 - GAP,
      top: cy - bh / 2 - GAP,
      right: cx + bw / 2 + GAP,
      bottom: cy + bh / 2 + GAP,
    };

    const pad = VIEW_PAD;
    const boost = getOrbitBoost();
    const cardScale = getCardBioScale();
    const CARD_GAP = 24;

    /** Max radius along angle that keeps AABB inside orbit pad */
    function maxRadiusFor(angleRad, halfW, halfH) {
      const c = Math.cos(angleRad);
      const s = Math.sin(angleRad);
      let maxR = Infinity;
      if (c > 0.001) maxR = Math.min(maxR, (oW - pad - halfW - cx) / c);
      if (c < -0.001) maxR = Math.min(maxR, (cx - pad - halfW) / -c);
      if (s > 0.001) maxR = Math.min(maxR, (oH - pad - halfH - cy) / s);
      if (s < -0.001) maxR = Math.min(maxR, (cy - pad - halfH) / -s);
      return Math.max(40, maxR);
    }

    function aabbAt(x, y, halfW, halfH) {
      return {
        left: x - halfW,
        top: y - halfH,
        right: x + halfW,
        bottom: y + halfH,
      };
    }

    function hitsExcl(box) {
      return (
        box.left < excl.right &&
        box.right > excl.left &&
        box.top < excl.bottom &&
        box.bottom > excl.top
      );
    }

    const placed = [];

    cardEls.forEach((card) => {
      const p = card._project;
      let angleRad = (p.angle * Math.PI) / 180;
      const cw = card.offsetWidth || 178;
      const ch = card.offsetHeight || 210;
      const halfW = (cw * cardScale) / 2;
      const halfH = (ch * cardScale) / 2;

      const fitMax = maxRadiusFor(angleRad, halfW, halfH);
      let r = Math.min(
        fitMax,
        Math.max(
          Math.hypot(bw / 2 + GAP + halfW * 0.5, bh / 2 + GAP + halfH * 0.5) *
            (p.radiusBias || 1) *
            boost,
          160 * boost
        )
      );

      let x = cx + Math.cos(angleRad) * r;
      let y = cy + Math.sin(angleRad) * r;
      let safe = false;

      /* Grow toward pad limit until clear of bio */
      for (let i = 0; i < 48; i++) {
        x = cx + Math.cos(angleRad) * r;
        y = cy + Math.sin(angleRad) * r;
        const box = aabbAt(x, y, halfW, halfH);
        const inBounds =
          box.left >= pad - 0.5 &&
          box.top >= pad - 0.5 &&
          box.right <= oW - pad + 0.5 &&
          box.bottom <= oH - pad + 0.5;
        if (!hitsExcl(box) && inBounds) {
          safe = true;
          break;
        }
        if (r >= fitMax - 1) break;
        r = Math.min(fitMax, r + 6);
      }

      /* If still hitting bio at max r (typical for tall bottom card), nudge angle */
      if (!safe) {
        const baseDeg = p.angle;
        const nudges = [0, 8, -8, 14, -14, 20, -20, 28, -28];
        for (const d of nudges) {
          const a = ((baseDeg + d) * Math.PI) / 180;
          const m = maxRadiusFor(a, halfW, halfH);
          let rr = Math.min(
            m,
            Math.max(
              Math.hypot(bw / 2 + GAP + halfW * 0.5, bh / 2 + GAP + halfH * 0.5) *
                (p.radiusBias || 1) *
                boost,
              160 * boost
            )
          );
          for (let i = 0; i < 40; i++) {
            x = cx + Math.cos(a) * rr;
            y = cy + Math.sin(a) * rr;
            const box = aabbAt(x, y, halfW, halfH);
            const inBounds =
              box.left >= pad - 0.5 &&
              box.top >= pad - 0.5 &&
              box.right <= oW - pad + 0.5 &&
              box.bottom <= oH - pad + 0.5;
            if (!hitsExcl(box) && inBounds) {
              angleRad = a;
              r = rr;
              safe = true;
              break;
            }
            if (rr >= m - 1) break;
            rr = Math.min(m, rr + 6);
          }
          if (safe) break;
        }
      }

      /* Final: stay in pad; if still in bio, park at max r along angle (best effort) */
      r = Math.min(r, maxRadiusFor(angleRad, halfW, halfH));
      x = cx + Math.cos(angleRad) * r;
      y = cy + Math.sin(angleRad) * r;
      x = Math.min(oW - halfW - pad, Math.max(halfW + pad, x));
      y = Math.min(oH - halfH - pad, Math.max(halfH + pad, y));

      placed.push({
        card,
        x,
        y,
        halfW,
        halfH,
        angleRad,
        r,
        cw,
        ch,
      });
    });

    /* Light pairwise separation - nudge along separation vector / tangent, keep ring feel */
    for (let iter = 0; iter < 5; iter++) {
      for (let i = 0; i < placed.length; i++) {
        for (let j = i + 1; j < placed.length; j++) {
          const a = placed[i];
          const b = placed[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const needX = a.halfW + b.halfW + CARD_GAP;
          const needY = a.halfH + b.halfH + CARD_GAP;
          const overlapX = needX - Math.abs(dx);
          const overlapY = needY - Math.abs(dy);
          if (overlapX <= 0 || overlapY <= 0) continue;

          const len = Math.hypot(dx, dy) || 1;
          /* Prefer tangential nudge (perp to radius from orbit center) mixed with separation */
          const push = Math.min(overlapX, overlapY) * 0.55;
          let nx = dx / len;
          let ny = dy / len;
          /* Blend with tangent of the nearer card's angle for organic slide */
          const tx = -Math.sin((a.angleRad + b.angleRad) / 2);
          const ty = Math.cos((a.angleRad + b.angleRad) / 2);
          nx = nx * 0.65 + tx * 0.35 * Math.sign(dx || 1);
          ny = ny * 0.65 + ty * 0.35 * Math.sign(dy || 1);
          const nlen = Math.hypot(nx, ny) || 1;
          nx /= nlen;
          ny /= nlen;

          a.x -= nx * push * 0.5;
          a.y -= ny * push * 0.5;
          b.x += nx * push * 0.5;
          b.y += ny * push * 0.5;

          /* Slight radial grow so separation doesn't collapse into bio (stay in pad) */
          for (const p of [a, b]) {
            p.x = Math.min(oW - p.halfW - pad, Math.max(p.halfW + pad, p.x));
            p.y = Math.min(oH - p.halfH - pad, Math.max(p.halfH + pad, p.y));
            const vx = p.x - cx;
            const vy = p.y - cy;
            const curR = Math.hypot(vx, vy) || 1;
            const left = p.x - p.halfW;
            const top = p.y - p.halfH;
            const right = p.x + p.halfW;
            const bottom = p.y + p.halfH;
            const hitsBio =
              left < excl.right && right > excl.left && top < excl.bottom && bottom > excl.top;
            if (hitsBio) {
              const m = maxRadiusFor(p.angleRad, p.halfW, p.halfH);
              const nr = Math.min(m, curR + 10);
              p.x = cx + (vx / curR) * nr;
              p.y = cy + (vy / curR) * nr;
              p.r = nr;
              p.x = Math.min(oW - p.halfW - pad, Math.max(p.halfW + pad, p.x));
              p.y = Math.min(oH - p.halfH - pad, Math.max(p.halfH + pad, p.y));
            }
          }
        }
      }
    }

    /* Final soft pad clamp + bio clear (grow radius within pad, don't shove Y into bio) */
    placed.forEach((p) => {
      for (let n = 0; n < 16; n++) {
        p.x = Math.min(oW - p.halfW - pad, Math.max(p.halfW + pad, p.x));
        p.y = Math.min(oH - p.halfH - pad, Math.max(p.halfH + pad, p.y));
        const left = p.x - p.halfW;
        const top = p.y - p.halfH;
        const right = p.x + p.halfW;
        const bottom = p.y + p.halfH;
        const overlaps =
          left < excl.right && right > excl.left && top < excl.bottom && bottom > excl.top;
        if (!overlaps) break;
        const m = maxRadiusFor(p.angleRad, p.halfW, p.halfH);
        if (p.r >= m - 1) break;
        p.r = Math.min(m, p.r + 8);
        p.x = cx + Math.cos(p.angleRad) * p.r;
        p.y = cy + Math.sin(p.angleRad) * p.r;
      }

      const card = p.card;
      const x = p.x;
      const y = p.y;
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
      card.dataset.baseX = String(x);
      card.dataset.baseY = String(y);
      card.dataset.baseScale = String(cardScale);
      const hot = card.classList.contains("is-hot");
      const desiredHot = cardScale * hotMulFor(card);
      const hotTarget = hot
        ? Math.min(desiredHot, clampHoverScale(card, desiredHot))
        : cardScale;
      if (!card._mag || !("tScale" in card._mag)) {
        card._mag = {
          scale: cardScale,
          rotX: 0,
          rotY: 0,
          tScale: hotTarget,
          tRotX: 0,
          tRotY: 0,
          pushX: 0,
          pushY: 0,
          tPushX: 0,
          tPushY: 0,
        };
      } else {
        card._mag.tScale = hotTarget;
        if (!hot) {
          card._mag.tRotX = 0;
          card._mag.tRotY = 0;
        }
      }
      if (!hot) {
        const px = card._mag.pushX || 0;
        const py = card._mag.pushY || 0;
        card.style.transform =
          `translate3d(calc(-50% + ${px}px), calc(-50% + ${py}px), 0) scale(${card._mag.scale})`;
      }
    });

    const hotNow = cardEls.find((c) => c.classList.contains("is-hot"));
    if (hotNow && typeof window.__applySiblingPush === "function") {
      window.__applySiblingPush(hotNow);
    }
  }

  function scheduleLayout() {
    cancelAnimationFrame(layoutRaf);
    layoutRaf = requestAnimationFrame(() => {
      placeOrbit();
    });
  }

  /* Bio expand - elastic (no bounce) on pointer enter; tap-toggle on coarse.
   * Motion blur ONLY for large left/top deltas during bio push; never idle float.
   * Blur window ~half prior (safety 300ms); filter property removed when idle. */
  let pushTimer = 0;
  let pushSafety = 0;
  let blurClearTimer = 0;
  const PUSH_BLUR_PX = 28; /* min |delta| on left or top to qualify as fast move */
  const PUSH_BLUR_MS = 125; /* half of prior 250ms - card moves 50% faster */
  const PUSH_SAFETY_MS = 150; /* half of prior 300ms */

  function stripCardFilter(card) {
    card.classList.remove("is-moving");
    card.style.removeProperty("filter");
  }

  function clearOrbitPushBlur() {
    if (!constellation) return;
    clearTimeout(blurClearTimer);
    constellation.classList.remove("is-pushing");
    cardEls.forEach((c) => {
      if (c._pushEnd) {
        c.removeEventListener("transitionend", c._pushEnd);
        c._pushEnd = null;
      }
      stripCardFilter(c);
    });
  }

  function pulseOrbitPush() {
    if (!constellation || reduceMotion) {
      placeOrbit();
      return;
    }
    clearTimeout(pushTimer);
    clearTimeout(pushSafety);
    clearTimeout(blurClearTimer);

    /* Snapshot pre-move positions before placeOrbit writes new left/top */
    const prev = new Map();
    cardEls.forEach((c) => {
      if (c._pushEnd) {
        c.removeEventListener("transitionend", c._pushEnd);
        c._pushEnd = null;
      }
      stripCardFilter(c);
      prev.set(c, {
        x: parseFloat(c.style.left) || 0,
        y: parseFloat(c.style.top) || 0,
      });
    });

    constellation.classList.add("is-pushing");
    placeOrbit();

    let anyBlur = false;
    cardEls.forEach((card) => {
      const before = prev.get(card) || { x: 0, y: 0 };
      const afterX = parseFloat(card.style.left) || 0;
      const afterY = parseFloat(card.style.top) || 0;
      const dx = Math.abs(afterX - before.x);
      const dy = Math.abs(afterY - before.y);
      const fast = dx >= PUSH_BLUR_PX || dy >= PUSH_BLUR_PX;
      if (!fast) return;
      anyBlur = true;
      card.classList.add("is-moving");
      const onEnd = (e) => {
        if (e.target !== card) return;
        if (e.propertyName !== "left" && e.propertyName !== "top") return;
        stripCardFilter(card);
        if (card._pushEnd) {
          card.removeEventListener("transitionend", card._pushEnd);
          card._pushEnd = null;
        }
        if (!cardEls.some((c) => c.classList.contains("is-moving"))) {
          clearTimeout(pushTimer);
          pushTimer = setTimeout(clearOrbitPushBlur, 40);
        }
      };
      card._pushEnd = onEnd;
      card.addEventListener("transitionend", onEnd);
    });

    /* Hard-cap blur duration at half prior window - never sticky */
    if (anyBlur) {
      blurClearTimer = setTimeout(() => {
        cardEls.forEach(stripCardFilter);
      }, PUSH_BLUR_MS);
    }

    pushSafety = setTimeout(clearOrbitPushBlur, PUSH_SAFETY_MS);
  }

  function setBioExpanded(on) {
    if (!bio) return;
    const next = !!on;
    if (next === bioExpanded) return;
    bioExpanded = next;
    bio.classList.toggle("is-expanded", bioExpanded);
    document.body.classList.toggle("bio-expanded", bioExpanded);
    bio.setAttribute("aria-expanded", bioExpanded ? "true" : "false");
    if (bioMore) {
      if (bioExpanded) bioMore.removeAttribute("hidden");
      else bioMore.setAttribute("hidden", "");
    }
    if (bioExtended) {
      if (bioExpanded) bioExtended.removeAttribute("hidden");
      else bioExtended.setAttribute("hidden", "");
    }
    /* Sparkles also while bio is expanded (tight ring around photo) */
    document.getElementById("bioPhoto")?.dispatchEvent(
      new CustomEvent(bioExpanded ? "bio-sparkle-on" : "bio-sparkle-off")
    );
    /* pulseOrbitPush snapshots positions then placeOrbit once - no second layout pass */
    pulseOrbitPush();
    syncBioScrollHint(bioExpanded);
    syncBioScrollBubble(bioExpanded);
  }

  /* Real 4-point star / cross-glint sparkles - tight annulus around visible photo face */
  function setupPhotoSparkles() {
    const photo = document.getElementById("bioPhoto");
    const canvas = document.getElementById("bioSparkles");
    if (!photo || !canvas || reduceMotion) return;
    const img = photo.querySelector("img");
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx || !img) return;

    let raf = 0;
    let active = false;
    let sparks = [];
    const PAD = 16; /* canvas pad past photo box - enough for 4–14px visual ring */

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.ceil(photo.offsetWidth + PAD * 2));
      const h = Math.max(1, Math.ceil(photo.offsetHeight + PAD * 2));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.style.inset = `-${PAD}px`;
      canvas.style.right = "auto";
      canvas.style.bottom = "auto";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { w, h };
    }

    /** Map visible img face into canvas CSS pixel space; ring 4–14 visual px. */
    function faceInCanvas(w, h) {
      const pr = photo.getBoundingClientRect();
      const ir = img.getBoundingClientRect();
      const liveScale = pr.width / Math.max(1, photo.offsetWidth);
      /* Prefer CSS expand scale when bio is expanded - stable during transition */
      let scale = liveScale;
      if (bioExpanded) {
        const raw = getComputedStyle(document.documentElement)
          .getPropertyValue("--bio-expand-scale").trim();
        const n = parseFloat(raw);
        if (Number.isFinite(n) && n > 0) scale = n;
      }
      /* visual ring targets → layout/canvas px */
      const ringIn = 4 / Math.max(scale, 0.01);
      const ringOut = 14 / Math.max(scale, 0.01);
      /* img face relative to photo box, then + PAD */
      const face = {
        l: PAD + (ir.left - pr.left) / Math.max(liveScale, 0.01),
        t: PAD + (ir.top - pr.top) / Math.max(liveScale, 0.01),
        r: PAD + (ir.right - pr.left) / Math.max(liveScale, 0.01),
        b: PAD + (ir.bottom - pr.top) / Math.max(liveScale, 0.01),
      };
      return { face, ringIn, ringOut, scale };
    }

    function pointInAnnulus(w, h) {
      const { face, ringIn, ringOut } = faceInCanvas(w, h);
      for (let attempt = 0; attempt < 16; attempt++) {
        const edge = Math.floor(Math.random() * 4);
        const depth = ringIn + Math.random() * (ringOut - ringIn);
        let x, y;
        if (edge === 0) {
          x = face.l + Math.random() * Math.max(1, face.r - face.l);
          y = face.t - depth;
        } else if (edge === 1) {
          x = face.l + Math.random() * Math.max(1, face.r - face.l);
          y = face.b + depth;
        } else if (edge === 2) {
          x = face.l - depth;
          y = face.t + Math.random() * Math.max(1, face.b - face.t);
        } else {
          x = face.r + depth;
          y = face.t + Math.random() * Math.max(1, face.b - face.t);
        }
        if (x >= face.l && x <= face.r && y >= face.t && y <= face.b) continue;
        if (x < 0 || y < 0 || x > w || y > h) continue;
        return { x, y };
      }
      const { face: f, ringIn: ri } = faceInCanvas(w, h);
      return { x: f.l - ri - 1, y: f.t + (f.b - f.t) * Math.random() };
    }

    function spawn(w, h) {
      sparks = [];
      const colors = [
        [255, 236, 210],
        [255, 220, 180],
        [255, 200, 170],
        [255, 248, 235],
      ];
      for (let i = 0; i < 14; i++) {
        const { x, y } = pointInAnnulus(w, h);
        sparks.push({
          x, y,
          size: 1.8 + Math.random() * 1.8,
          a: 0.55 + Math.random() * 0.4,
          life: Math.random() * Math.PI * 2,
          speed: 0.07 + Math.random() * 0.09,
          rot: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.06,
          col: colors[i % colors.length],
          blink: 0.9 + Math.random() * 1.4,
        });
      }
    }

    function drawStar(x, y, size, rot, rgba, glow) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.shadowColor = glow;
      ctx.shadowBlur = size * 0.9;
      ctx.beginPath();
      const arm = size;
      const thick = size * 0.18;
      ctx.moveTo(0, -arm);
      ctx.lineTo(thick, -thick);
      ctx.lineTo(arm, 0);
      ctx.lineTo(thick, thick);
      ctx.lineTo(0, arm);
      ctx.lineTo(-thick, thick);
      ctx.lineTo(-arm, 0);
      ctx.lineTo(-thick, -thick);
      ctx.closePath();
      ctx.fillStyle = rgba;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 252, 245, ${Math.min(1, parseFloat(rgba.split(",")[3]) * 1.2)})`;
      ctx.arc(0, 0, Math.max(0.5, size * 0.12), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function frame() {
      if (!active) {
        raf = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const { face } = faceInCanvas(w, h);
      /* Draw only outside the visible face */
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      ctx.rect(face.l, face.t, face.r - face.l, face.b - face.t);
      ctx.clip("evenodd");
      for (const s of sparks) {
        s.life += s.speed;
        s.rot += s.rotSpeed;
        if (s.x >= face.l && s.x <= face.r && s.y >= face.t && s.y <= face.b) {
          const p = pointInAnnulus(w, h);
          s.x = p.x; s.y = p.y;
        }
        const twinkle = Math.pow(Math.abs(Math.sin(s.life * s.blink)), 1.6);
        const sc = 0.55 + 0.55 * twinkle;
        const alpha = s.a * twinkle;
        if (alpha < 0.04) continue;
        const [r, g, b] = s.col;
        drawStar(s.x, s.y, s.size * sc, s.rot,
          `rgba(${r}, ${g}, ${b}, ${alpha})`,
          `rgba(${r}, ${g}, ${b}, ${0.5 * alpha})`);
      }
      ctx.restore();
      /* Hard erase face */
      ctx.clearRect(face.l, face.t, face.r - face.l, face.b - face.t);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (active) return;
      active = true;
      photo.classList.add("is-sparkling");
      const { w, h } = resize();
      spawn(w, h);
      if (!raf) raf = requestAnimationFrame(frame);
    }

    function stop() {
      active = false;
      photo.classList.remove("is-sparkling");
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    let restartTimer = 0;
    function restart() {
      const { w, h } = resize();
      spawn(w, h);
      if (!active) start();
      else if (!raf) raf = requestAnimationFrame(frame);
    }

    /* Wait for bio scale transition to settle before measuring face/ring */
    function restartAfterExpand() {
      clearTimeout(restartTimer);
      restartTimer = setTimeout(restart, 280);
    }

    photo.addEventListener("pointerenter", start);
    photo.addEventListener("pointerleave", () => { if (!bioExpanded) stop(); });
    photo.addEventListener("focusin", start);
    photo.addEventListener("focusout", (e) => {
      if (!photo.contains(e.relatedTarget) && !bioExpanded) stop();
    });
    photo.addEventListener("bio-sparkle-on", restartAfterExpand);
    photo.addEventListener("bio-sparkle-off", () => {
      clearTimeout(restartTimer);
      stop();
    });
  }

  /* Avatar click - lightbox only when bio is expanded (preview click expands bio). */
  function setupBioPhotoLightbox() {
    const photo = document.getElementById("bioPhoto");
    if (!photo) return;
    photo.setAttribute("role", "button");
    photo.setAttribute("tabindex", "0");
    photo.setAttribute("aria-label", "View larger photo of Oleksii");
    /* cursor via CSS: .bio.is-expanded .bio-photo { cursor: pointer } */

    const open = (e) => {
      if (!bioExpanded) return;
      e.preventDefault();
      e.stopPropagation();
      lastFocus = photo;
      openLightbox("assets/oleksii.jpg", "Oleksii");
      lightbox?.querySelector(".lightbox-close")?.focus();
    };

    photo.addEventListener("click", open);
    photo.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") open(e);
    });
  }

  function setupBioExpand() {
    if (!bio) return;

    /* Click-to-toggle only (Olivia-like) - NO hover/focus auto-expand */
    bio.style.cursor = "pointer";
    bio.setAttribute("aria-expanded", bioExpanded ? "true" : "false");
    const controls = [bioMore && "bioMore", bioExtended && "bioExtended"].filter(Boolean);
    if (controls.length) {
      bio.setAttribute("aria-controls", controls.join(" "));
    }

    const email = bio.querySelector("a.bio-email");
    if (email) {
      email.addEventListener("click", (e) => e.stopPropagation());
    }

    bio.addEventListener("click", (e) => {
      if (e.target.closest("a.bio-email")) return;
      if (e.target.closest("#bioPhoto")) return; /* lightbox only */
      e.preventDefault();
      setBioExpanded(!bioExpanded);
    });

    bio.addEventListener("keydown", (e) => {
      if (e.target.closest("#bioPhoto")) return;
      if (e.target.closest("a.bio-email")) return;
      if (e.target !== bio && !bio.contains(e.target)) return;
      /* Only toggle when focus is on the bio plate itself, not nested controls */
      if (e.target !== bio && e.target.closest("a, button, [role='button']")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setBioExpanded(!bioExpanded);
      }
    });

    /* Click outside collapses when expanded */
    document.addEventListener(
      "click",
      (e) => {
        if (!bioExpanded) return;
        if (bio.contains(e.target)) return;
        if (e.target.closest(".modal, .lightbox, .modal-panel")) return;
        setBioExpanded(false);
      },
      true
    );

    setupBioScrollHint();
    setupBioScrollBubble();
    setupPhotoSparkles();
    setupBioPhotoLightbox();
    bindBioWheel();
  }

  /* Glow “Scroll down” in expanded bio gutter when .bio-inner can scroll */
  let bioScrollHintDismissed = false;
  let bioScrollHintHideTimer = 0;

  function getBioInner() {
    return bio?.querySelector(".bio-inner") || null;
  }

  function getBioScrollHint() {
    return document.getElementById("bioScrollHint");
  }

  function bioInnerIsScrollable() {
    const inner = getBioInner();
    if (!inner) return false;
    return inner.scrollHeight > inner.clientHeight + 8;
  }

  function hideBioScrollHint(opts) {
    const hint = getBioScrollHint();
    if (!hint) return;
    const dismiss = !!(opts && opts.dismiss);
    clearTimeout(bioScrollHintHideTimer);
    if (dismiss) {
      hint.classList.add("is-dismissed");
      bioScrollHintHideTimer = setTimeout(() => {
        if (!hint.classList.contains("is-dismissed")) return;
        hint.setAttribute("hidden", "");
        hint.setAttribute("aria-hidden", "true");
      }, 450);
      return;
    }
    hint.classList.remove("is-dismissed");
    hint.setAttribute("hidden", "");
    hint.setAttribute("aria-hidden", "true");
  }

  function showBioScrollHint() {
    const hint = getBioScrollHint();
    if (!hint) return;
    clearTimeout(bioScrollHintHideTimer);
    hint.classList.remove("is-dismissed");
    hint.removeAttribute("hidden");
    hint.setAttribute("aria-hidden", "false");
  }

  function refreshBioScrollHintVisibility() {
    if (!bioExpanded || bioScrollHintDismissed) {
      if (!bioExpanded) hideBioScrollHint();
      return;
    }
    if (bioInnerIsScrollable()) showBioScrollHint();
    else hideBioScrollHint();
  }

  function syncBioScrollHint(expanded) {
    if (!expanded) {
      bioScrollHintDismissed = false;
      hideBioScrollHint();
      return;
    }
    bioScrollHintDismissed = false;
    /* Layout + extended skills open async - recheck after paint / short delay */
    requestAnimationFrame(() => {
      refreshBioScrollHintVisibility();
      requestAnimationFrame(refreshBioScrollHintVisibility);
    });
    setTimeout(refreshBioScrollHintVisibility, 280);
  }

  function setupBioScrollHint() {
    const hint = getBioScrollHint();
    const inner = getBioInner();
    if (!hint || !inner || inner._bioScrollHintBound) return;
    inner._bioScrollHintBound = true;
    inner.addEventListener(
      "scroll",
      () => {
        if (!bioExpanded || bioScrollHintDismissed) return;
        if (inner.scrollTop > 24) {
          bioScrollHintDismissed = true;
          hideBioScrollHint({ dismiss: true });
        }
      },
      { passive: true }
    );
  }

  /* Classic always-visible peach/gold scroll bubble (bio + scrollable cards) */
  function ensureScrollBubble(el) {
    if (!el) return null;
    let bubble = el.querySelector(":scope > .scroll-bubble");
    if (bubble) return bubble;
    bubble = document.createElement("div");
    bubble.className = "scroll-bubble";
    bubble.setAttribute("aria-hidden", "true");
    bubble.hidden = true;
    bubble.innerHTML =
      '<div class="scroll-bubble-track"><div class="scroll-bubble-thumb"></div></div>';
    el.appendChild(bubble);
    bindScrollBubbleInteraction(el, bubble);
    if (!el._scrollBubbleScrollBound) {
      el._scrollBubbleScrollBound = true;
      el.addEventListener(
        "scroll",
        () => {
          updateScrollBubbleThumb(el);
        },
        { passive: true }
      );
    }
    return bubble;
  }

  function updateScrollBubbleThumb(el) {
    const bubble = el && el.querySelector(":scope > .scroll-bubble");
    if (!bubble || bubble.hidden) return;
    const thumb = bubble.querySelector(".scroll-bubble-thumb");
    if (!thumb) return;
    const ch = el.clientHeight;
    const sh = el.scrollHeight;
    if (ch <= 0 || sh <= 0) return;
    /* Keep overlay glued to the visible scrollport while content scrolls */
    bubble.style.top = `${el.scrollTop}px`;
    bubble.style.height = `${ch}px`;
    const ratio = Math.min(1, ch / sh);
    const thumbH = Math.max(28, Math.round(ch * ratio));
    const maxScroll = Math.max(0, sh - ch);
    const trackTravel = Math.max(0, ch - thumbH);
    const thumbTop =
      maxScroll > 0 ? (el.scrollTop / maxScroll) * trackTravel : 0;
    thumb.style.height = `${thumbH}px`;
    thumb.style.transform = `translateY(${thumbTop}px)`;
  }

  function syncScrollBubble(el, enabled) {
    if (!el) return;
    const bubble = ensureScrollBubble(el);
    if (!bubble) return;
    const can =
      !!enabled && el.scrollHeight > el.clientHeight + 8;
    el.classList.toggle("is-scrollable", can);
    bubble.hidden = !can;
    if (!can) {
      bubble.style.top = "";
      bubble.style.height = "";
      return;
    }
    updateScrollBubbleThumb(el);
  }

  function bindScrollBubbleInteraction(el, bubble) {
    if (!bubble || bubble._dragBound) return;
    bubble._dragBound = true;
    const track = bubble.querySelector(".scroll-bubble-track");
    const thumb = bubble.querySelector(".scroll-bubble-thumb");
    if (!track || !thumb) return;

    const scrollFromClientY = (clientY) => {
      const rect = track.getBoundingClientRect();
      const ch = el.clientHeight;
      const sh = el.scrollHeight;
      const maxScroll = Math.max(0, sh - ch);
      if (maxScroll <= 0 || rect.height <= 0) return;
      const thumbH = thumb.offsetHeight || 28;
      const travel = Math.max(1, rect.height - thumbH);
      let y = clientY - rect.top - thumbH / 2;
      y = Math.max(0, Math.min(travel, y));
      el.scrollTop = (y / travel) * maxScroll;
      updateScrollBubbleThumb(el);
    };

    let dragging = false;
    const onPointerMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      scrollFromClientY(e.clientY);
    };
    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };

    const startDrag = (e) => {
      if (e.button != null && e.button !== 0) return;
      dragging = true;
      e.preventDefault();
      e.stopPropagation();
      try {
        thumb.setPointerCapture?.(e.pointerId);
      } catch (_) {}
      scrollFromClientY(e.clientY);
      window.addEventListener("pointermove", onPointerMove, { passive: false });
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    };

    thumb.addEventListener("pointerdown", startDrag);
    track.addEventListener("pointerdown", (e) => {
      if (e.target === thumb || thumb.contains(e.target)) return;
      startDrag(e);
    });
  }

  function refreshBioScrollBubble() {
    const inner = getBioInner();
    if (!inner) return;
    const can = bioExpanded && bioInnerIsScrollable();
    syncScrollBubble(inner, can);
  }

  function syncBioScrollBubble(expanded) {
    const inner = getBioInner();
    if (!expanded) {
      if (inner) syncScrollBubble(inner, false);
      return;
    }
    requestAnimationFrame(() => {
      refreshBioScrollBubble();
      requestAnimationFrame(refreshBioScrollBubble);
    });
    setTimeout(refreshBioScrollBubble, 280);
  }

  function setupBioScrollBubble() {
    const inner = getBioInner();
    if (!inner || inner._bioScrollBubbleBound) return;
    inner._bioScrollBubbleBound = true;
    ensureScrollBubble(inner);
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => {
        if (bioExpanded) refreshBioScrollBubble();
      });
      ro.observe(inner);
    }
  }

  function syncCardScrollBubble(card) {
    if (!card) return;
    if (NO_SCROLL_HOT_IDS.has(card.dataset?.id)) {
      syncScrollBubble(card, false);
      return;
    }
    const hot =
      card.classList.contains("is-hot") || card.classList.contains("is-expanded");
    if (!hot) {
      syncScrollBubble(card, false);
      return;
    }
    /* Layout may still be settling after max-height — double rAF */
    requestAnimationFrame(() => {
      syncScrollBubble(card, true);
      requestAnimationFrame(() => syncScrollBubble(card, true));
    });
    setTimeout(() => syncScrollBubble(card, true), 320);
  }

  /**
   * Cap unscaled max-height so after current/hot scale the visual height fits
  /**
   * Cap unscaled max-height so after current/hot scale the visual height fits
   * in the orbit (with pad). Clears when leaving hot. Enables internal scroll.
   */
  function fitHotCardHeight(card, scaleHint) {
    if (!card) return;
    /* Euphoria / VRIDIA / Olivia: expand to content height - no internal scrollbar. */
    if (NO_SCROLL_HOT_IDS.has(card.dataset?.id)) {
      card.style.maxHeight = "";
      syncCardScrollBubble(card);
      return;
    }
    if (!isDesktopOrbit() || constellation?.classList.contains("is-stacked")) {
      /* Mobile stacked: keep cards from oddly tall overflow */
      if (card.classList.contains("is-hot") || card.classList.contains("is-expanded")) {
        const vh = window.innerHeight || 640;
        card.style.maxHeight = `${Math.max(220, Math.floor(vh * 0.72))}px`;
        syncCardScrollBubble(card);
      } else {
        card.style.maxHeight = "";
        syncScrollBubble(card, false);
      }
      return;
    }
    if (!orbit || !(card.classList.contains("is-hot") || card.classList.contains("is-expanded"))) {
      card.style.maxHeight = "";
      syncScrollBubble(card, false);
      return;
    }
    const baseX = parseFloat(card.dataset.baseX);
    const baseY = parseFloat(card.dataset.baseY);
    if (!Number.isFinite(baseX) || !Number.isFinite(baseY)) {
      card.style.maxHeight = "";
      syncScrollBubble(card, false);
      return;
    }
    const oW = orbit.clientWidth;
    const oH = orbit.clientHeight;
    const inwardAmt = inwardAmountFor(card);
    let cxEff = baseX;
    let cyEff = baseY;
    if (inwardAmt) {
      const inward = inwardTowardCenter(card, inwardAmt);
      cxEff = baseX + inward.x;
      cyEff = baseY + inward.y;
    }
    const scale =
      scaleHint ||
      card._mag?.tScale ||
      card._mag?.scale ||
      parseFloat(card.dataset.baseScale || "1") ||
      1;
    const safeScale = Math.max(0.5, scale);
    let roomPx;
    if (EXPAND_DOWN_IDS.has(card.dataset.id)) {
      /* Top of unscaled card near cyEff - ch/2; visual grows downward.
         Use resting height estimate for top edge, then available below. */
      const restingH = card.offsetHeight || 210;
      const topEdge = cyEff - restingH / 2;
      roomPx = Math.max(120, oH - VIEW_PAD - topEdge);
    } else if (EXPAND_UP_IDS.has(card.dataset.id)) {
      const restingH = card.offsetHeight || 210;
      const bottomEdge = cyEff + restingH / 2;
      roomPx = Math.max(120, bottomEdge - VIEW_PAD);
    } else {
      const maxHalfH = Math.max(60, Math.min(cyEff - VIEW_PAD, oH - VIEW_PAD - cyEff));
      roomPx = maxHalfH * 2;
    }
    /* Soft-cap visual height (~52% orbit) so expand stays a bigger card, not fullscreen. */
    const softCap = Math.min(roomPx, oH * 0.46);
    const unscaledMax = Math.floor(softCap / safeScale);
    card.style.maxHeight = `${Math.max(160, unscaledMax)}px`;
    syncCardScrollBubble(card);
  }

  function clearHotCardHeight(card) {
    if (card) {
      card.style.maxHeight = "";
      syncScrollBubble(card, false);
    }
  }

  /** Wheel over hot/expanded card: force internal scroll (transform scale can flake native wheel). */
  function bindHotCardWheel(card) {
    if (!card || card._hotWheelBound) return;
    card._hotWheelBound = true;
    card.addEventListener(
      "wheel",
      (e) => {
        if (NO_SCROLL_HOT_IDS.has(card.dataset?.id)) return;
        if (!card.classList.contains("is-hot") && !card.classList.contains("is-expanded")) return;
        const maxScroll = card.scrollHeight - card.clientHeight;
        if (maxScroll <= 1) return;
        const next = Math.max(0, Math.min(maxScroll, card.scrollTop + e.deltaY));
        if (next === card.scrollTop) return;
        e.preventDefault();
        e.stopPropagation();
        card.scrollTop = next;
      },
      { passive: false }
    );
  }

  /** Wheel over expanded bio content: scroll .bio-inner (scale can flake native wheel). */
  function bindBioWheel() {
    if (!bio || bio._bioWheelBound) return;
    bio._bioWheelBound = true;
    bio.addEventListener(
      "wheel",
      (e) => {
        if (!bio.classList.contains("is-expanded")) return;
        const inner = bio.querySelector(".bio-inner");
        if (!inner) return;
        const maxScroll = inner.scrollHeight - inner.clientHeight;
        if (maxScroll <= 1) return;
        const next = Math.max(0, Math.min(maxScroll, inner.scrollTop + e.deltaY));
        if (next === inner.scrollTop) return;
        e.preventDefault();
        e.stopPropagation();
        inner.scrollTop = next;
      },
      { passive: false }
    );
  }

  /* Magnetic hover - HOT ~1.4 (Olivia/VRIDIA/Euphoria full no-scroll + inward); sibling push */
  function setupMagnetic() {
    if (reduceMotion || coarsePointer) return;

    const LERP = 0.38; /* ~2x prior 0.2 - sibling give-way 50% faster */
    const SIBLING_PUSH = 32; /* mid of 24-40px */
    let magRaf = 0;

    function applyCardTransform(card) {
      const s = card._mag;
      if (!s) return;
      if (isDesktopOrbit() && !constellation.classList.contains("is-stacked")) {
        const pushX = s.pushX || 0;
        const pushY = s.pushY || 0;
        /* Shift down by half the extra scaled height so growth prefers downward. */
        const h = card.offsetHeight || 210;
        const growDown = EXPAND_DOWN_IDS.has(card.dataset.id)
          ? ((s.scale - 1) * h) / 2
          : 0;
        const growUp = EXPAND_UP_IDS.has(card.dataset.id)
          ? -((s.scale - 1) * h) / 2
          : 0;
        card.style.transform =
          `translate3d(calc(-50% + ${pushX}px), calc(-50% + ${pushY + growDown + growUp}px), 0) scale(${s.scale}) rotateX(${s.rotX}deg) rotateY(${s.rotY}deg)`;
      } else {
        card.style.transform = `scale(${s.scale})`;
      }
    }

    function ensureMag(card) {
      const base = parseFloat(card.dataset.baseScale || "1") || 1;
      if (!card._mag) {
        card._mag = {
          scale: base,
          rotX: 0,
          rotY: 0,
          tScale: base,
          tRotX: 0,
          tRotY: 0,
          pushX: 0,
          pushY: 0,
          tPushX: 0,
          tPushY: 0,
        };
      }
      return card._mag;
    }

    /** Push siblings away from hot card along vector; hot card stays put (no nudge). */
    function applySiblingPush(hotCard) {
      if (!hotCard || !isDesktopOrbit() || constellation.classList.contains("is-stacked")) {
        cardEls.forEach((c) => {
          const s = ensureMag(c);
          s.tPushX = 0;
          s.tPushY = 0;
        });
        return;
      }
      const hx = parseFloat(hotCard.dataset.baseX);
      const hy = parseFloat(hotCard.dataset.baseY);
      if (!Number.isFinite(hx) || !Number.isFinite(hy)) return;

      cardEls.forEach((card) => {
        const s = ensureMag(card);
        if (card === hotCard) {
          /* Slide toward orbit center while revealing text (not just scale into edges). */
          const amt = inwardAmountFor(hotCard);
          if (amt) {
            const inward = inwardTowardCenter(hotCard, amt);
            s.tPushX = inward.x;
            s.tPushY = inward.y;
          } else {
            s.tPushX = 0;
            s.tPushY = 0;
          }
          return;
        }
        const bx = parseFloat(card.dataset.baseX);
        const by = parseFloat(card.dataset.baseY);
        if (!Number.isFinite(bx) || !Number.isFinite(by)) {
          s.tPushX = 0;
          s.tPushY = 0;
          return;
        }
        let dx = bx - hx;
        let dy = by - hy;
        const len = Math.hypot(dx, dy) || 1;
        /* Stronger push when closer */
        const distScale = Math.max(0.55, Math.min(1.15, 220 / len));
        const amt = SIBLING_PUSH * distScale;
        s.tPushX = (dx / len) * amt;
        s.tPushY = (dy / len) * amt;
      });
    }

    window.__applySiblingPush = applySiblingPush;

    function clearSiblingPush() {
      cardEls.forEach((card) => {
        const s = ensureMag(card);
        s.tPushX = 0;
        s.tPushY = 0;
      });
    }

    function setHotTarget(card) {
      const s = ensureMag(card);
      const base = parseFloat(card.dataset.baseScale || "1") || 1;
      const desired = base * hotMulFor(card);
      applySiblingPush(card);
      /* Honor orbit clamp so grown AABB stays inside pad (no 0.88 floor override). */
      const room = clampHoverScale(card, desired);
      s.tScale = Math.min(desired, room);
      fitHotCardHeight(card, s.tScale);
      return s;
    }

    function tickMag() {
      magRaf = 0;
      let needs = false;
      cardEls.forEach((card) => {
        const s = card._mag;
        if (!s) return;
        s.scale += (s.tScale - s.scale) * LERP;
        s.rotX += (s.tRotX - s.rotX) * LERP;
        s.rotY += (s.tRotY - s.rotY) * LERP;
        s.pushX = (s.pushX || 0) + ((s.tPushX || 0) - (s.pushX || 0)) * LERP;
        s.pushY = (s.pushY || 0) + ((s.tPushY || 0) - (s.pushY || 0)) * LERP;
        const moving =
          Math.abs(s.tScale - s.scale) > 0.002 ||
          Math.abs(s.tRotX - s.rotX) > 0.02 ||
          Math.abs(s.tRotY - s.rotY) > 0.02 ||
          Math.abs((s.tPushX || 0) - (s.pushX || 0)) > 0.15 ||
          Math.abs((s.tPushY || 0) - (s.pushY || 0)) > 0.15;
        if (moving) {
          needs = true;
        } else {
          s.scale = s.tScale;
          s.rotX = s.tRotX;
          s.rotY = s.tRotY;
          s.pushX = s.tPushX || 0;
          s.pushY = s.tPushY || 0;
        }
        applyCardTransform(card);
      });
      if (needs) magRaf = requestAnimationFrame(tickMag);
    }

    function kickMag() {
      if (!magRaf) magRaf = requestAnimationFrame(tickMag);
    }

    cardEls.forEach((card) => {
      bindHotCardWheel(card);
      card.addEventListener("pointerenter", () => {
        constellation.classList.add("has-hover");
        /* Hover grow: is-hot only. is-expanded is for focus / mobile tap (copyable). */
        card.classList.add("is-hot");
        const s = setHotTarget(card);
        s.tRotX = 0;
        s.tRotY = 0;
        kickMag();
        /* Desc unclamps after paint - remeasure room + maxHeight. */
        requestAnimationFrame(() => {
          if (!card.classList.contains("is-hot")) return;
          setHotTarget(card);
          kickMag();
        });
        setTimeout(() => {
          if (!card.classList.contains("is-hot")) return;
          setHotTarget(card);
          kickMag();
        }, 420);
      });
      card.addEventListener("pointerleave", () => {
        card.classList.remove("is-hot");
        /* Keep is-expanded if keyboard focus still holds the card. */
        if (!card.matches(":focus-within")) {
          card.classList.remove("is-expanded");
          clearHotCardHeight(card);
        } else {
          fitHotCardHeight(card, card._mag?.tScale);
        }
        const s = ensureMag(card);
        const base = parseFloat(card.dataset.baseScale || "1") || 1;
        if (!card.classList.contains("is-expanded")) {
          s.tScale = base;
          s.tRotX = 0;
          s.tRotY = 0;
          clearSiblingPush();
        }
        kickMag();
        if (!constellation.querySelector(".card.is-hot")) {
          constellation.classList.remove("has-hover");
        }
      });
      /* Remeasure after desc unclamps / max-height transition grows content. */
      card.addEventListener("transitionend", (e) => {
        if (!card.classList.contains("is-hot")) return;
        if (e.target !== card && !card.contains(e.target)) return;
        if (e.propertyName !== "max-height" && e.propertyName !== "opacity") return;
        const s = card._mag;
        fitHotCardHeight(card, s?.tScale);
        if (s) {
          const base = parseFloat(card.dataset.baseScale || "1") || 1;
          const desired = base * hotMulFor(card);
          const room = clampHoverScale(card, desired);
          s.tScale = Math.min(desired, room);
          kickMag();
        }
      });
      card.addEventListener("pointermove", (e) => {
        if (!isDesktopOrbit() || constellation.classList.contains("is-stacked")) return;
        /* Selection only possible on truly expanded cards - skip magnetic rotate then. */
        if (card.classList.contains("is-expanded") && hasActiveTextSelection(card)) return;
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        const s = setHotTarget(card);
        s.tRotY = px * 5;
        s.tRotX = -py * 4;
        kickMag();
      });
    });
  }

  /* Focus rings / expanded */
  constellation?.addEventListener("focusin", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      card.classList.add("is-expanded", "is-hot");
      constellation.classList.add("has-hover");
      const base = parseFloat(card.dataset.baseScale || "1") || 1;
      fitHotCardHeight(card, base * hotMulFor(card));
    }
  });
  constellation?.addEventListener("focusout", (e) => {
    const card = e.target.closest(".card");
    if (card && !card.contains(e.relatedTarget)) {
      card.classList.remove("is-expanded", "is-hot");
      clearHotCardHeight(card);
      if (!constellation.querySelector(".card.is-hot:focus-within, .card.is-hot:hover")) {
        constellation.classList.remove("has-hover");
      }
    }
  });

  /* Scroll intensifies light-push */
  function updateLightFromScroll() {
    if (!lightPush || reduceMotion) return;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const t = Math.min(1, window.scrollY / max);
    lightPush.style.setProperty("--push", String(0.5 + t * 0.5));
  }

  if (!reduceMotion) {
    updateLightFromScroll();
    window.addEventListener("scroll", updateLightFromScroll, { passive: true });
  } else if (lightPush) {
    lightPush.style.setProperty("--push", "0.65");
  }

  /* Cursor parallax on hall + light (desktop only) */
  function setupParallax() {
    if (reduceMotion || coarsePointer || !stage) return;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    function tick() {
      px += (tx - px) * 0.08;
      py += (ty - py) * 0.08;
      document.documentElement.style.setProperty("--parallax-x", px.toFixed(4));
      document.documentElement.style.setProperty("--parallax-y", py.toFixed(4));
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener(
      "pointermove",
      (e) => {
        if (!isDesktopOrbit()) {
          tx = 0;
          ty = 0;
          return;
        }
        tx = (e.clientX / window.innerWidth - 0.5) * 2;
        ty = (e.clientY / window.innerHeight - 0.5) * 2;
      },
      { passive: true }
    );

    raf = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    });
  }

  /* Soft peach/gold cursor spark */
  function setupCursorSpark() {
    if (reduceMotion || coarsePointer) return;
    const spark = document.createElement("div");
    spark.className = "cursor-spark";
    spark.setAttribute("aria-hidden", "true");
    document.body.appendChild(spark);

    let x = 0;
    let y = 0;
    let sx = 0;
    let sy = 0;
    let on = false;

    function move() {
      sx += (x - sx) * 0.22;
      sy += (y - sy) * 0.22;
      spark.style.transform = `translate3d(${sx}px, ${sy}px, 0)`;
      requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    window.addEventListener(
      "pointermove",
      (e) => {
        x = e.clientX;
        y = e.clientY;
        if (!on) {
          on = true;
          spark.classList.add("is-on");
        }
      },
      { passive: true }
    );
    window.addEventListener("pointerleave", () => {
      on = false;
      spark.classList.remove("is-on");
    });
  }

  /* Peach-pink energy wisps along floor neon */
  function initParticles() {
    if (reduceMotion || !particlesCanvas) return;
    const ctx = particlesCanvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dots = [];

    function resize() {
      w = particlesCanvas.width = window.innerWidth;
      h = particlesCanvas.height = window.innerHeight;
    }

    function spawn() {
      dots.length = 0;
      const count = Math.min(42, Math.floor(w / 32));
      for (let i = 0; i < count; i++) {
        const along = Math.random();
        dots.push({
          x: w * 0.5 + (Math.random() - 0.5) * w * (0.04 + along * 0.1),
          y: h * (0.32 + along * 0.62),
          r: 0.7 + Math.random() * 2.4,
          vy: -0.12 - Math.random() * 0.42,
          vx: (Math.random() - 0.5) * 0.18,
          a: 0.22 + Math.random() * 0.55,
          hue: Math.random() > 0.45 ? "255,190,140" : "255,140,175",
          trail: Math.random() > 0.7,
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.trail) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${d.hue},${d.a * 0.35})`;
          ctx.lineWidth = d.r * 0.6;
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x - d.vx * 8, d.y - d.vy * 8);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(${d.hue},${d.a})`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
        if (d.y < h * 0.28 || d.x < w * 0.35 || d.x > w * 0.65) {
          const along = Math.random();
          d.y = h * (0.55 + Math.random() * 0.4);
          d.x = w * 0.5 + (Math.random() - 0.5) * w * (0.04 + along * 0.08);
          d.a = 0.22 + Math.random() * 0.55;
        }
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    spawn();
    frame();
    window.addEventListener("resize", () => {
      resize();
      spawn();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(frame);
    });
  }

  /* Touch: first tap expands link cards */
  if (coarsePointer) {
    let touchExpanded = null;
    constellation?.addEventListener(
      "click",
      (e) => {
        const card = e.target.closest("a.card");
        if (!card || card.classList.contains("card-coming")) return;
        if (touchExpanded !== card) {
          e.preventDefault();
          if (touchExpanded) {
            touchExpanded.classList.remove("is-expanded", "is-hot");
            clearHotCardHeight(touchExpanded);
          }
          card.classList.add("is-expanded", "is-hot");
          fitHotCardHeight(card, 1);
          touchExpanded = card;
        }
      },
      true
    );
    document.addEventListener("click", (e) => {
      if (touchExpanded && !e.target.closest(".card")) {
        touchExpanded.classList.remove("is-expanded", "is-hot");
        clearHotCardHeight(touchExpanded);
        touchExpanded = null;
      }
    });
  }

  function applyStaticI18n(lang) {
    const pack = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && typeof pack[key] === "string") el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && typeof pack[key] === "string") el.setAttribute("aria-label", pack[key]);
    });
    document.querySelectorAll("[data-i18n-cta]").forEach((el) => {
      const key = el.getAttribute("data-i18n-cta");
      if (key && typeof pack[key] === "string") el.textContent = pack[key];
    });
  }

  function patchCardCopy(lang) {
    cardEls.forEach((card) => {
      const p = card._project;
      if (!p) return;
      const typeEl = card.querySelector(".card-type");
      const titleEl = card.querySelector(".card-title");
      const descEl = card.querySelector(".card-desc");
      if (typeEl) typeEl.textContent = loc(p.type, lang);
      if (titleEl) titleEl.textContent = loc(p.title, lang);
      if (descEl) descEl.textContent = loc(p.description, lang);
      const title = loc(p.title, lang);
      if (p.kind === "olivia" && p.videos) {
        card.setAttribute(
          "aria-label",
          ui("openOliviaGallery", lang)(title, p.videos.length)
        );
      } else if (p.kind === "blender" && p.images) {
        card.setAttribute(
          "aria-label",
          ui("openBlenderGallery", lang)(title, p.images.length)
        );
      } else {
        card.setAttribute("aria-label", title);
      }
    });
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "de") lang = "en";
    currentLang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (_) {}
    document.documentElement.lang = lang;
    applyStaticI18n(lang);
    patchCardCopy(lang);
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setupLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });
    setLang(currentLang);
  }

  renderProjects();
  setupBioExpand();
  setupLangSwitch();
  scheduleLayout();
  setupMagnetic();
  /* Wheel scroll for hot cards even when magnetic hover is off (touch / reduced motion). */
  cardEls.forEach((card) => {
    if (!card._hotWheelBound) {
      bindHotCardWheel(card);
      card._hotWheelBound = true;
    }
  });
  setupParallax();
  setupCursorSpark();
  initParticles();

  window.addEventListener("resize", scheduleLayout);
  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleLayout);
  }
  window.addEventListener("load", scheduleLayout);
})();
