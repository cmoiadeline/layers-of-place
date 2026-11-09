(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ORDER = ['registan', 'gur', 'afrasiyab', 'modern', 'traditions'];
  const SITE_IDS = ['registan', 'gur', 'afrasiyab'];

  /* ---------- nav skyline ---------- */
  $('#skyline').innerHTML = SKYLINE_SVG;

  /* ---------- routing ---------- */
  let map = null;
  function route() {
    const p = (location.hash || '#about').slice(1);
    const page = ['about', 'groupwork', 'fieldnotes', 'team'].includes(p) ? p : 'about';
    $$('.page').forEach(el => el.classList.toggle('on', el.id === 'page-' + page));
    $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.p === page));
    if (page === 'groupwork') { initMap(); if (map) setTimeout(() => map.resize(), 50); }
    if (page === 'fieldnotes') renderCompare();
  }
  window.addEventListener('hashchange', route);

  /* ---------- ABOUT diagram ---------- */
  $('#aboutDiagram').innerHTML = `
  <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" font-family="JetBrains Mono, monospace">
    <defs><clipPath id="cp"><rect x="40" y="20" width="330" height="380" rx="4"/></clipPath></defs>
    <g clip-path="url(#cp)">
      <rect class="lay" x="40" y="20"  width="330" height="76" fill="#e3d6b5"/>
      <rect class="lay" x="40" y="96"  width="330" height="76" fill="#d3c19a"/>
      <rect class="lay" x="40" y="172" width="330" height="76" fill="#b89f74"/>
      <rect class="lay" x="40" y="248" width="330" height="76" fill="#8a7050"/>
      <rect class="lay" x="40" y="324" width="330" height="76" fill="#5a4630"/>
    </g>
    <g fill="#1f1a14" font-size="14" class="lbl">
      <text x="58" y="62">Customs &amp; traditions</text>
      <text x="58" y="138">Modern architecture</text>
      <text x="58" y="214">Registan</text>
      <text x="58" y="234" font-size="11" opacity=".7">15th–17th c.</text>
      <text x="58" y="290" fill="#f6efe0">Gur-e-Amir</text>
      <text x="58" y="310" font-size="11" fill="#f6efe0" opacity=".75">from c. 1400</text>
      <text x="58" y="366" fill="#f6efe0">Afrasiyab</text>
      <text x="58" y="386" font-size="11" fill="#f6efe0" opacity=".75">from c. 7th c. BCE</text>
    </g>
    <g stroke="#b58a4f" fill="none" stroke-width="1.5">
      <path d="M384 24v146M378 24h6M378 170h6"/><path d="M384 176v146M378 176h6M378 322h6"/><path d="M384 328v68M378 328h6M378 396h6"/>
    </g>
    <g fill="#1f7a7a" font-size="13"><text x="396" y="102">LIVED</text><text x="396" y="254">PRESERVED</text><text x="396" y="368">UNEARTHED</text></g>
    <g fill="#7a6c58" font-size="11"><text x="396" y="118">still being made</text><text x="396" y="270">kept &amp; re-read</text><text x="396" y="384">dug up</text></g>
  </svg>`;

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const state = { solved: {}, level: {}, wrong: {}, toured: false };
  SITE_IDS.forEach(id => { state.level[id] = 0; state.wrong[id] = new Set(); });

  /* ---------- INNER PAGE ---------- */
  const inner = $('#inner');
  function openInner(id) {
    const t = TOPICS[id]; if (!t) return;
    stopTour();
    $('#inKind').textContent = t.kind;
    $('#inTitle').textContent = t.title;
    $('#inPeriod').textContent = t.period;
    // one backdrop per kind: archaeology for the three sites, blueprint for modern, ikat for traditions
    inner.dataset.theme = id === 'modern' ? 'modern' : id === 'traditions' ? 'trad' : 'dig';
    const li = it => `<li><span class="tag ${it.t}">${it.t}</span><span>${esc(it.text)}${(it.refs || []).map(r => `<sup class="ref">[${r}]</sup>`).join('')}</span></li>`;
    const conn = c => `<li><span class="tag I">↔</span><span>${esc(c.text)}${c.to ? `<button class="conn-btn" data-go="${c.to}">Go to ${esc(TOPICS[c.to].short)} →</button>` : ''}</span></li>`;
    const panel = (n, title, body) => `<article><h3><span>${String(n).padStart(2, '0')}</span> ${title}</h3><ul>${body}</ul></article>`;
    const panels = t.custom
      ? t.custom.map((c, i) => panel(i + 1, esc(c.title),
          `<li class="cu"><b>What it means</b><span>${esc(c.means)}</span></li><li class="cu"><b>In practice</b><span>${esc(c.practice)}</span></li>`))
      : [panel(1, 'Fact / example', t.fact.map(li).join('')), panel(2, 'Why it matters', t.why.map(li).join('')),
         panel(3, 'Question / debate', t.question.map(li).join('')), panel(4, 'Connection', t.connect.map(conn).join(''))];
    if (t.custom && t.connect.length) panels.push(panel(5, 'Connection', t.connect.map(conn).join('')));
    $('#inPanels').innerHTML = panels.join('');
    $('#inIntro').textContent = t.intro || ''; $('#inIntro').hidden = !t.intro;
    $('.legend', inner).hidden = !!t.custom;
    $('#inImgs').innerHTML = (t.images || []).map(m => `<figure><a href="${m.src}" target="_blank" rel="noopener"><img src="${m.src}" alt="${esc(m.cap)}" loading="lazy"></a><figcaption>${esc(m.cap)}</figcaption></figure>`).join('');
    $('#inImgs').hidden = !(t.images && t.images.length);
    $('#inRefs').innerHTML = t.refs.map(r => `<li>${esc(r)}</li>`).join('');
    inner.hidden = false; inner.scrollTop = 0;
  }
  function closeInner() { inner.hidden = true; }
  $('#innerClose').addEventListener('click', closeInner);
  inner.addEventListener('click', e => {
    if (e.target === inner) closeInner();
    const b = e.target.closest('[data-go]'); if (b) openInner(b.dataset.go);
  });

  /* ---------- MAP ---------- */
  // low, flat camera so the city reads like a landscape with a far horizon
  const CAM = { center: [66.9815, 39.6524], zoom: 14.05, pitch: 72, bearing: 0, padding: { top: 420, bottom: 80, left: 0, right: 0 } };

  // ---- one palette per era; paintMap() recolours the whole real map from it ----
  const roadIds = { fill: [], cas: [], path: [], all: [] };
  function indexRoads() {
    map.getStyle().layers.forEach(l => {
      if (l.type !== 'line' || l.source !== 'protomaps' || !/^(road|bridge|tunnel)_/.test(l.id)) return;
      if (/_fill/.test(l.id) && !/rail/.test(l.id)) roadIds.fill.push(l.id);
      else if (/_case/.test(l.id)) roadIds.cas.push(l.id);
      else if (/path/.test(l.id)) roadIds.path.push(l.id);
      else return;
      roadIds.all.push(l.id);
    });
  }
  function paintMap(P) {
    const set = (id, prop, val) => { if (map.getLayer(id)) map.setPaintProperty(id, prop, val); };
    set('background', 'background-color', P.land);
    set('landcover', 'fill-color', P.landcover);
    set('park_national_park', 'fill-color', P.park);
    set('park_nature_reserve', 'fill-color', P.park);
    set('landuse_residential', 'fill-color', P.res);
    set('landuse', 'fill-color', P.landuse);
    set('water', 'fill-color', P.water);
    set('water_shadow', 'fill-color', P.shadow);
    set('waterway', 'line-color', P.water);
    set('building-top', 'fill-color', P.top);
    roadIds.fill.forEach(id => set(id, 'line-color', P.rfill));
    roadIds.cas.forEach(id => set(id, 'line-color', P.rcase));
    roadIds.path.forEach(id => set(id, 'line-color', P.path));
    set('hs', 'hillshade-exaggeration', P.hill);
    set('b3d', 'fill-extrusion-color', ['interpolate', ['linear'], ['coalesce', ['get', 'height'], 8], 0, P.bLo, 25, P.bMid, 70, P.bHi]);
  }

  // where the horizon sits on screen -> the far scenery is drawn above it
  function updateHorizon() {
    if (!map) return;
    const h = $('#map').clientHeight, p = map.getPitch(), pad = map.getPadding();
    const cy = h / 2 + (pad.top - pad.bottom) / 2;
    const f = 0.5 * h / Math.tan((36.87 / 2) * Math.PI / 180);
    const hz = cy - f * Math.tan((90 - p) * Math.PI / 180);
    $('#page-groupwork').style.setProperty('--hz', Math.max(60, hz - 22) + 'px');
    const b = map.getBearing();
    $('#far').style.transform = `translateX(${-b * 10}px)`;
    $('#eras').style.transform = `translateX(${-b * 16}px)`;
  }

  // far skylines (one per era); which one shows is driven by the time slider
  $('#eras').innerHTML = ERA_SKY.map((e, i) => `<div class="era" data-i="${i}">${e.svg}</div>`).join('');

  /* ---------- CHANGE: four chapters morph the real map, the sky and the sites ---------- */
  const lerp = (a, b, f) => a + (b - a) * f;
  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const mixHex = (a, b, f) => '#' + hex2rgb(a).map((v, k) => Math.round(lerp(v, hex2rgb(b)[k], f)).toString(16).padStart(2, '0')).join('');
  const mixPal = (A, B, f) => { const o = {}; for (const k in A) o[k] = typeof A[k] === 'number' ? lerp(A[k], B[k], f) : mixHex(A[k], B[k], f); return o; };
  const ease = p => (p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
  let tNow = 3, lastIdx = -1, lastMapPaint = 0;

  function renderChapter(idx) {
    const c = CHAPTERS[idx];
    $('#chNo').textContent = 'CHAPTER ' + (idx + 1) + ' / ' + CHAPTERS.length;
    $('#chYear').textContent = c.year < 0 ? Math.abs(c.year) + ' BCE' : String(c.year);
    $('#chName').textContent = c.name;
    $('#chBlurb').textContent = c.blurb;
    $('#chWhat').innerHTML = c.what.map(w => `<li>${esc(w)}</li>`).join('');
    $$('#chaps .chap').forEach((b, k) => b.classList.toggle('on', k === idx));
    $$('#eras .era').forEach((el, k) => el.classList.toggle('on', k === idx));
  }
  function setAlive(id, a) {
    const el = id === 'modern' ? $('#frameWrap') : clueEls[id];
    if (!el) return;
    el.style.setProperty('--alive', a.toFixed(3));
    if (id === 'modern') return;
    const tag = a < .5 ? (id === 'afrasiyab' ? 'RUINS' : 'NOT YET BUILT') : '';
    $('.etag', el).textContent = tag;
    el.classList.toggle('ghost', !!tag);
  }
  function applyTime(t, force) {
    tNow = t;
    const i = Math.min(2, Math.floor(t)), f = t - i, A = CHAPTERS[i], B = CHAPTERS[i + 1];
    const idx = Math.round(t);
    if (idx !== lastIdx) { lastIdx = idx; renderChapter(idx); }
    const w = A.wash.map((v, k) => lerp(v, B.wash[k], f));
    $('#eraWash').style.background = `rgba(${w[0] | 0},${w[1] | 0},${w[2] | 0},${w[3].toFixed(3)})`;
    const sky = A.sky.map((c, k) => mixHex(c, B.sky[k], f));
    $('.sky.s1').style.background = `linear-gradient(180deg,${sky[0]} 0%,${sky[1]} 62%,${sky[2]} 100%)`;
    $('#eras').style.setProperty('--sil', mixHex(A.sil, B.sil, f));
    [...SITE_IDS, 'modern'].forEach(id => setAlive(id, lerp(A.alive[id], B.alive[id], f)));
    const now = performance.now();
    if (map && map.getLayer('b3d') && (force || now - lastMapPaint > 40)) {
      lastMapPaint = now;
      const build = lerp(A.build, B.build, f), road = lerp(A.road, B.road, f);
      paintMap(mixPal(A.pal, B.pal, f));
      map.setPaintProperty('b3d', 'fill-extrusion-height', ['*', 3 * build, ['coalesce', ['get', 'height'], 7]]);
      map.setPaintProperty('b3d', 'fill-extrusion-base', ['*', 3 * build, ['coalesce', ['get', 'min_height'], 0]]);
      map.setPaintProperty('b3d', 'fill-extrusion-opacity', Math.min(0.97, build * 8));
      map.setPaintProperty('building-top', 'fill-opacity', Math.min(1, build * 3));
      roadIds.all.forEach(id => map.setPaintProperty(id, 'line-opacity', road));
    }
  }

  const tour = { on: false, timer: 0, raf: 0 };
  function stopTour() {
    tour.on = false; clearTimeout(tour.timer); cancelAnimationFrame(tour.raf);
    $('#tplay').textContent = '▶ Time-lapse';
  }
  function tweenTo(target, dur, done) {
    cancelAnimationFrame(tour.raf);
    const from = tNow, t0 = performance.now();
    (function s(now) {
      const p = Math.min(1, (now - t0) / dur);
      applyTime(from + (target - from) * ease(p), p === 1);
      if (p < 1) tour.raf = requestAnimationFrame(s); else if (done) done();
    })(t0);
  }
  function goChapter(i) { state.touched = true; stopTour(); tweenTo(i, 1500); }
  function playTour() {
    stopTour(); tour.on = true; $('#tplay').textContent = '❚❚ Pause';
    applyTime(0, true);
    let i = 0;
    const hold = () => {
      tour.timer = setTimeout(() => {
        if (!tour.on) return;
        i++;
        if (i > 3) { stopTour(); return; }
        tweenTo(i, 2200, () => { if (tour.on) hold(); });
      }, 3200);
    };
    hold();
  }
  $('#chaps').innerHTML = CHAPTERS.map((c, i) =>
    `<button class="chap" data-i="${i}"><b>${esc(c.label)}</b><span>${esc(c.name)}</span></button>`).join('');
  $('#chaps').addEventListener('click', e => { const b = e.target.closest('.chap'); if (b) goChapter(+b.dataset.i); });
  $('#tplay').addEventListener('click', () => { if (tour.on) stopTour(); else playTour(); });
  window.addEventListener('resize', () => { if (map) { map.resize(); updateHorizon(); } });

  function initMap() {
    if (map) return;
    if (typeof maplibregl === 'undefined') { fallbackCards(); return; }
    map = new maplibregl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: CAM.center, zoom: CAM.zoom, pitch: CAM.pitch, bearing: 0,
      attributionControl: { compact: true }, maxPitch: 82
    });
    window.__map = map;
    map.addControl(new maplibregl.ScaleControl({ maxWidth: 140, unit: 'metric' }), 'bottom-left');

    map.on('error', e => { if (!mapLoaded) setTimeout(fallbackCards, 4000); });
    setTimeout(fallbackCards, 20000);          // never leave the page without the clue cards
    map.on('load', () => {
      mapLoaded = true;
      const fb = $('.fallback'); if (fb) { fb.remove(); fallbackOn = false; } // map arrived late: swap plain cards for the real ones
      map.jumpTo(CAM);
      indexRoads();
      // hide all labels so names do not give the clues away
      map.getStyle().layers.filter(l => l.type === 'symbol').forEach(l => map.setLayoutProperty(l.id, 'visibility', 'none'));
      // real terrain: elevation tiles + hillshade (vertical relief x2.4)
      try {
        map.addSource('dem', {
          type: 'raster-dem', encoding: 'terrarium', tileSize: 256, maxzoom: 14,
          tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
          attribution: 'Terrain: Mapzen / AWS Open Data'
        });
        map.addLayer({ id: 'hs', type: 'hillshade', source: 'dem',
          paint: { 'hillshade-exaggeration': 0.55, 'hillshade-shadow-color': '#8b7550', 'hillshade-highlight-color': '#fff8e6', 'hillshade-accent-color': '#b49c6c' } }, 'waterway');
        map.setTerrain({ source: 'dem', exaggeration: 2.4 });
      } catch (e) { console.warn('terrain unavailable', e); }
      // 3D buildings, heights exaggerated x3 so the skyline reads from far away
      try {
        map.addLayer({
          id: 'b3d', type: 'fill-extrusion', source: 'protomaps', 'source-layer': 'buildings', minzoom: 13,
          paint: {
            'fill-extrusion-color': ['interpolate', ['linear'], ['coalesce', ['get', 'height'], 8], 0, '#e6d6b0', 25, '#cfb88c', 70, '#a98d62'],
            'fill-extrusion-height': ['*', 3, ['coalesce', ['get', 'height'], 7]],
            'fill-extrusion-base': ['*', 3, ['coalesce', ['get', 'min_height'], 0]],
            'fill-extrusion-opacity': 0.97
          }
        });
      } catch (e) { console.warn('3D buildings unavailable', e); }
      addMarkers();
      updateArms();
      updateHorizon();
      applyTime(3, true);
      if (!state.toured) { state.toured = true; setTimeout(() => { if (!state.touched) playTour(); }, 2500); } // first visit: the city grows from the empty plain
    });
    map.on('move', () => { updateArms(); updateHorizon(); });
    ['mousedown', 'wheel', 'touchstart'].forEach(ev => map.getCanvas().addEventListener(ev, () => { drifting = false; }, { passive: true }));
    startDrift();
  }

  /* slow cinematic drift until the audience touches the map */
  let drifting = true;
  function startDrift() {
    const t0 = performance.now();
    (function tick(now) {
      if (!drifting || !map) return;
      map.setBearing(Math.sin((now - t0) / 9000) * 7);
      requestAnimationFrame(tick);
    })(t0);
  }

  /* ---------- markers ---------- */
  const PLACE = {
    registan:  { anchor: 'bottom-right', cls: 'up left', rot: -3,   off: [6, 6] },
    gur:       { anchor: 'top',          cls: 'down',    rot: 2.5,  off: [0, -6] },
    afrasiyab: { anchor: 'bottom',       cls: 'up',      rot: -1.5, off: [0, 6] }
  };
  const clueEls = {};
  let signEl = null;

  function makeClue(id, i) {
    const p = PLACE[id];
    const el = document.createElement('div');
    el.className = 'clue ' + p.cls;
    el.style.setProperty('--r', p.rot + 'deg');
    el.innerHTML = `<div class="card"><div class="art">${ART[id]}</div><span class="etag"></span><div class="q"><span class="cn">CLUE ${i + 1}</span><span class="st">Guess ›</span></div></div><div class="stem"></div><div class="pin"></div>`;
    el.addEventListener('click', () => state.solved[id] ? openInner(id) : openGuess(id));
    clueEls[id] = el;
    return el;
  }

  /* if the map cannot load (offline), keep the game playable with plain cards */
  let mapLoaded = false, fallbackOn = false;
  function fallbackCards() {
    if (mapLoaded || fallbackOn) return;
    fallbackOn = true;
    const box = document.createElement('div');
    box.className = 'fallback';
    box.innerHTML = '<p class="small">The map could not load (no internet?). The clue game still works: guess each site.</p><div class="row"></div><button class="trad">Customs &amp; Traditions →</button>';
    SITE_IDS.forEach((id, i) => $('.row', box).appendChild(makeClue(id, i)));
    $('.trad', box).addEventListener('click', () => openInner('traditions'));
    $('#page-groupwork').appendChild(box);
    applyTime(3, true);
  }

  function addMarkers() {
    SITE_IDS.forEach((id, i) => {
      const p = PLACE[id];
      new maplibregl.Marker({ element: makeClue(id, i), anchor: p.anchor, offset: p.off }).setLngLat(SITES[id].lngLat).addTo(map);
    });

    signEl = document.createElement('div');
    signEl.className = 'sign';
    signEl.innerHTML = `<div class="post"></div><div class="base"></div><div class="plaque">Traditions</div>` +
      SIGN_ARMS.map((a, i) => `<div class="arm" data-site="${a.site}"><i><span>${esc(a.label)}</span></i></div>`).join('');
    signEl.addEventListener('click', () => openInner('traditions'));
    new maplibregl.Marker({ element: signEl, anchor: 'bottom', offset: [0, 4] }).setLngLat(SIGNPOST.lngLat).addTo(map);
  }

  /* arms point at the real on-screen bearing of each site */
  function updateArms() {
    if (!map || !signEl) return;
    const o = map.project(SIGNPOST.lngLat);
    $$('.arm', signEl).forEach((arm, idx) => {
      const s = map.project(SITES[arm.dataset.site].lngLat);
      const a = Math.atan2(s.y - o.y, s.x - o.x) * 180 / Math.PI;
      arm.style.transform = `rotate(${a}deg)`;
      arm.style.top = (60 + idx * 30) + 'px';
      $('i', arm).classList.toggle('flip', a > 90 || a < -90);
    });
  }

  /* modern architecture frame */
  $('#frameBtn').addEventListener('click', () => openInner('modern'));

  /* ---------- GUESS MODAL ---------- */
  const guess = $('#guess');
  let guessId = null;
  const shuffled = SITE_IDS.slice().sort(() => Math.random() - .5);

  function clueHTML(id, lvl) {
    const c = CLUES[id][lvl];
    if (c.kind === 'art') return `<div class="art">${ART[c.key]}</div>`;
    if (c.kind === 'photo') return ''; // the blurred hint photo (img/hints) replaces this slot
    return `<div class="txt">${esc(c.text)}</div>`;
  }
  function renderGuess() {
    const id = guessId, lvl = state.level[id];
    $('#guessTitle').textContent = 'CLUE ' + (SITE_IDS.indexOf(id) + 1) + ' · HINT ' + (lvl + 1) + ' / 3';
    let html = '';
    if (state.wrong[id].size) html += `<div class="blurhint" title="Tap to sharpen"><img src="img/hints/${id}-blur.jpg" alt="Blurred hint photo"><img class="clr" src="img/hints/${id}-clear.jpg" alt=""><span>Hint photo · tap to sharpen</span></div>`;
    for (let i = lvl; i >= 0; i--) html += clueHTML(id, i);
    $('#clueView').innerHTML = html;
    $('#choices').innerHTML = shuffled.map(s => `<button data-s="${s}" ${state.wrong[id].has(s) ? 'class="wrong" disabled' : ''}>${esc(TOPICS[s].title)}</button>`).join('');
  }
  function openGuess(id) {
    state.touched = true; stopTour();
    guessId = id; renderGuess();
    $('#guessMsg').textContent = 'Which site is this?';
    guess.hidden = false;
  }
  function closeGuess() { guess.hidden = true; }
  guess.addEventListener('click', e => {
    const bh = e.target.closest('.blurhint'); if (bh) return bh.classList.toggle('on');
    if (e.target === guess || e.target.hasAttribute('data-close')) return closeGuess();
    const b = e.target.closest('[data-s]'); if (!b || b.disabled) return;
    const pick = b.dataset.s, id = guessId;
    if (pick === id) {
      b.classList.add('right');
      $('#guessMsg').textContent = 'Yes — ' + TOPICS[id].title + '.';
      $$('#choices button').forEach(x => x.disabled = true);
      setTimeout(() => solve(id), 900);
    } else {
      state.wrong[id].add(pick);
      state.level[id] = Math.min(2, state.level[id] + 1);
      renderGuess();
      $('#guessMsg').textContent = state.wrong[id].size >= 2 ? 'Only one left…' : 'Not quite. Here is another hint.';
    }
  });

  function solve(id) {
    state.solved[id] = true;
    closeGuess();
    const el = clueEls[id];
    el.classList.add('solved');
    $('.cn', el).textContent = TOPICS[id].title.toUpperCase();
    $('.st', el).textContent = 'Open ›';
    const n = Object.keys(state.solved).length;
    $('#found').textContent = n;
    map.flyTo({ center: SITES[id].lngLat, zoom: 15.8, pitch: 68, bearing: -15, padding: { top: 200, bottom: 90, left: 0, right: 0 }, duration: 2200, essential: true });
    drifting = false;
    setTimeout(() => {
      openInner(id);
      if (n === 3) {
        $('.gw-head p').textContent = 'All three found. Street names are on. Now open FieldNotes.';
        map.getStyle().layers.filter(l => l.type === 'symbol').forEach(l => map.setLayoutProperty(l.id, 'visibility', 'visible'));
      }
    }, 2300);
  }

  /* back to overview when the inner page closes after a fly-in */
  inner.addEventListener('click', e => { if (e.target === inner) overview(); });
  $('#innerClose').addEventListener('click', overview);
  function overview() {
    if (!map) return;
    map.easeTo({ ...CAM, duration: 1600 });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (!guess.hidden) closeGuess(); else if (!inner.hidden) { closeInner(); overview(); } }
  });

  /* ---------- FIELDNOTES: compare ---------- */
  let cmp = ['registan', 'afrasiyab'];
  $('#cmpChips').innerHTML = ORDER.map(id => `<button data-c="${id}">${esc(TOPICS[id].short)}</button>`).join('');
  $('#cmpChips').addEventListener('click', e => {
    const b = e.target.closest('[data-c]'); if (!b) return;
    const id = b.dataset.c;
    if (cmp.includes(id)) { if (cmp.length > 1) cmp = cmp.filter(x => x !== id); }
    else cmp = [cmp[cmp.length - 1], id];
    renderCompare();
  });
  function renderCompare() {
    $$('#cmpChips button').forEach(b => b.classList.toggle('on', cmp.includes(b.dataset.c)));
    if (cmp.length < 2) { $('#cmpStage').innerHTML = '<p class="small">Pick a second layer.</p>'; return; }
    const [a, b] = cmp.slice().sort((x, y) => ORDER.indexOf(x) - ORDER.indexOf(y));
    const card = id => `<div class="c"><h4>${esc(TOPICS[id].title)}</h4><p>${esc(TOPICS[id].period)}</p><p>${esc(TOPICS[id].fact[0] ? TOPICS[id].fact[0].text : TOPICS[id].custom[0].means)}</p></div>`;
    const note = PAIR_NOTES[a + '|' + b] || '[TODO] Write how these two connect, and the evidence for it.';
    $('#cmpStage').innerHTML = card(a) + card(b) +
      `<svg class="thread" viewBox="0 0 120 24"><path d="M0 12C30 -4 90 28 120 12" fill="none" stroke="#d9b26f" stroke-width="2" stroke-dasharray="4 4"><animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite"/></path></svg>` +
      `<div class="cmp-note">${esc(note)}</div>`;
  }

  /* where sources disagree */
  $('#disputes').innerHTML = DISPUTES.map(d =>
    `<div class="dsp"><b>${esc(d.topic)}</b><div class="ab"><span>${esc(d.a)}</span><em>vs</em><span>${esc(d.b)}</span></div><p>${esc(d.note)}</p></div>`).join('');

  /* closing question */
  $('#closingQ').textContent = CLOSING_QUESTION;

  /* field photos: story sets (collage + explanation) on a strip with a drag slider */
  const gal = $('#gallery'), gsl = $('#galSlider');
  gal.innerHTML = FIELD_SETS.map(s => `<section class="set n${s.imgs.length}">
    <p class="set-no">SET ${s.no} · ${esc(s.place)}</p><h4>${esc(s.title)}</h4>
    <div class="collage">${s.imgs.map(n => `<a href="img/field/${n}.jpg" target="_blank" rel="noopener"><img src="img/field/${n}.jpg" alt="${esc(s.place)}" loading="lazy" draggable="false"></a>`).join('')}</div>
    <div class="set-text"><p><b>We saw</b>${esc(s.saw)}</p><p><b>What it says about layers</b>${esc(s.think)}</p><p class="ask"><b>Question</b>${esc(s.ask)}</p></div>
  </section>`).join('');
  const maxScroll = () => Math.max(1, gal.scrollWidth - gal.clientWidth);
  gsl.addEventListener('input', () => { gal.scrollLeft = gsl.value / 100 * maxScroll(); });
  gal.addEventListener('scroll', () => { gsl.value = gal.scrollLeft / maxScroll() * 100; });
  let gx = null, gs = 0;
  gal.addEventListener('pointerdown', e => { gx = e.clientX; gs = gal.scrollLeft; gal.classList.add('drag'); });
  window.addEventListener('pointermove', e => { if (gx !== null) gal.scrollLeft = gs - (e.clientX - gx); });
  window.addEventListener('pointerup', () => { gx = null; gal.classList.remove('drag'); });
  gal.addEventListener('dragstart', e => e.preventDefault());

  /* bibliography (collected from all five pages) */
  const seen = new Set();
  $('#bib').innerHTML = ORDER.flatMap(id => TOPICS[id].refs.map(r => ({ r, id })))
    .filter(x => !seen.has(x.r) && seen.add(x.r))
    .map(x => `<li class="${x.r.startsWith('[TODO]') ? 'todo' : ''}">${esc(x.r)} <span class="small">· ${esc(TOPICS[x.id].short)}</span></li>`).join('');

  /* team */
  // relaxed, uneven arrangement: each card gets its own tilt and offset
  const tr = [-2.4, 1.6, -1, 2.2, -1.8, 1.1, -0.6], ty = [0, 26, 8, 34, 4, 22, 12];
  $('#teamGrid').innerHTML = TEAM.slice().sort((x, y) => x.name.localeCompare(y.name)).map((m, i) =>
    `<div class="m" style="--r:${tr[i % 7]}deg;--dy:${ty[i % 7]}px"><div class="avatar"><img src="img/team/${m.photo}.jpg" alt="${esc(m.name)}"></div><div><b>${esc(m.name.replace(/\s*\[TODO[^\]]*\]/, ''))}</b><span>${/^\[TODO/.test(m.role) ? '' : esc(m.role)}</span></div></div>`).join('');

  route();
})();
