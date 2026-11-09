/* Hand-drawn SVG art (our own, no third-party images) */
window.ART = {
  registan: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="140" fill="#142038"/>
    <path d="M40 140V50q0-34 60-34t60 34v90z" fill="#27406b"/>
    <path d="M62 140V62q0-24 38-24t38 24v78z" fill="#0d1527"/>
    <g fill="none" stroke="#7fd0cf" stroke-width="1.2" opacity=".9">
      <path d="M100 20v18M100 20l-8 8M100 20l8 8"/>
      <path d="M48 56h104M48 72h104M48 88h104M48 104h104" opacity=".35"/>
    </g>
    <g fill="#d9b26f"><path d="M100 70l5 8 9 1-7 6 2 9-9-5-9 5 2-9-7-6 9-1z"/></g>
  </svg>`,
  gur: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="140" fill="#142038"/>
    <rect x="70" y="98" width="60" height="42" fill="#2a3b5e"/>
    <rect x="76" y="86" width="48" height="14" fill="#33486f"/>
    <path d="M72 86c0-34 12-52 28-52s28 18 28 52z" fill="#2fa3a6"/>
    <g stroke="#0f5f63" stroke-width="1.2" fill="none"><path d="M100 34v52M90 38c-5 14-6 30-5 48M110 38c5 14 6 30 5 48M81 48c-4 12-5 24-4 38M119 48c4 12 5 24 4 38"/></g>
    <path d="M100 34v-10" stroke="#d9b26f" stroke-width="2"/><circle cx="100" cy="22" r="2.5" fill="#d9b26f"/>
    <rect x="52" y="60" width="8" height="80" fill="#2a3b5e"/><rect x="140" y="60" width="8" height="80" fill="#2a3b5e"/>
  </svg>`,
  afrasiyab: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="140" fill="#142038"/>
    <path d="M0 100q50-70 100-62t100 62v40H0z" fill="#6b5a46"/>
    <path d="M0 110q50-60 100-54t100 54" fill="none" stroke="#4e4132" stroke-width="2"/>
    <path d="M0 122q50-50 100-46t100 46" fill="none" stroke="#8a7457" stroke-width="2"/>
    <path d="M0 132q50-40 100-36t100 36" fill="none" stroke="#4e4132" stroke-width="2"/>
    <rect x="86" y="64" width="26" height="18" fill="#cdb98f" opacity=".85"/>
    <path d="M90 70h6v6h-6zM100 68h8v8h-8z" fill="#b55a3a"/>
    <path d="M10 98l6-6 6 6M20 110l6-6 6 6" fill="none" stroke="#d9b26f" stroke-width="1.2"/>
  </svg>`,
  modern: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#142038"/>
    <path d="M30 140V70l26-18v88zM64 140V40l24 12v88zM96 140V64h40v76zM142 140V50l32 20v70z" fill="#5f78a8"/></svg>`,
  traditions: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#142038"/>
    <rect x="96" y="30" width="8" height="100" fill="#8a6a43"/>
    <g fill="#d9b26f"><path d="M104 40h46l8 7-8 7h-46z"/><path d="M96 64H50l-8 7 8 7h46z"/><path d="M104 88h40l8 7-8 7h-40z"/></g></svg>`
};

/* skyline for the nav (domes + minarets) */
window.SKYLINE_SVG = `<svg viewBox="0 0 1600 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="#d9c8a1" d="M0 90V70l60-6 40 8 30-14 20-30 20 30 30 14 70-10 20 8 30-20 30-22 30 22 30 20 70-6 40 12 36-8 30-26 34-8 34 8 30 26 36 8 40-12 70 6 30-20 30-22 30 22 30 20 20-8 70 10 30-14 20-30 20 30 30 14 40-8 60 6V90z"/>
</svg>`;

/* ---- far skylines that change with the era (drawn by us, decorative) ---- */
(function () {
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const wrap = body => `<svg viewBox="0 0 1600 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

  // c. 7th c. BCE: a low mound with a mudbrick wall and gate
  function mound() {
    let s = '<path d="M0 120V104Q250 70 520 92T1000 86T1600 100V120Z"/>';
    s += '<path d="M360 94h220v-16h-8v8h-10v-8h-10v8h-10v-8h-10v8h-10v-8h-10v8h-10v-8h-10v8h-10v-8h-10v8h-10v-8h-10v8h-10v-8h-10v8h-10v-8h-10v8h-8z"/>';
    s += '<path d="M455 94v-22h30v22z"/>';
    for (let i = 0; i < 9; i++) { const x = 700 + i * 70 + rnd() * 20; s += `<path d="M${x} 96l14-16 14 16z"/>`; }
    return wrap(s);
  }
  // 15th c.: domes, minarets, an arched gateway
  function timurid() {
    let s = '<rect x="0" y="108" width="1600" height="12"/>';
    for (let x = 60; x < 1560; x += 130 + rnd() * 90) {
      const w = 70 + rnd() * 40, h = 28 + rnd() * 22;
      s += `<rect x="${x}" y="${108 - h}" width="${w}" height="${h}"/>`;
      s += `<path d="M${x + 6} ${108 - h}C${x + 6} ${108 - h - 54} ${x + w - 6} ${108 - h - 54} ${x + w - 6} ${108 - h}Z"/>`;
      s += `<rect x="${x + w / 2 - 1}" y="${108 - h - 62}" width="2" height="10"/>`;
    }
    for (let x = 140; x < 1560; x += 260 + rnd() * 120) s += `<rect x="${x}" y="22" width="9" height="90"/><path d="M${x - 3} 24h15l-7-12z"/>`;
    s += '<path d="M730 108V52q0-22 40-22t40 22v56h-18V58q0-12-22-12t-22 12v50z"/>';
    return wrap(s);
  }
  // 20th c.: apartment slabs and a tall monument
  function soviet() {
    let s = '';
    for (let x = 0; x < 1600; x += 70 + rnd() * 50) {
      const w = 60 + rnd() * 70, h = 38 + rnd() * 42;
      s += `<rect x="${x}" y="${120 - h}" width="${w}" height="${h}"/>`;
    }
    s += '<path d="M1180 120V30l8-16 8 16v90z"/><rect x="1166" y="64" width="44" height="6"/>';
    return wrap(s);
  }
  // today: glass towers, a few small domes
  function today() {
    let s = '';
    for (let x = 0; x < 1600; x += 36 + rnd() * 40) {
      const w = 26 + rnd() * 32, h = 30 + rnd() * 78;
      s += `<rect x="${x}" y="${120 - h}" width="${w}" height="${h}"/>`;
      if (rnd() > .78) s += `<path d="M${x + w / 2} ${120 - h}v-16" stroke="#8d9fab" stroke-width="2"/>`;
    }
    for (let x = 220; x < 1500; x += 360 + rnd() * 160) s += `<path d="M${x} 120a22 22 0 0 1 44 0z"/>`;
    return wrap(s);
  }
  window.ERA_SKY = [
    { year: 'c. 7th c. BCE', note: 'Afrasiyab',          svg: mound() },
    { year: '15th century',  note: 'Timurid Samarkand',  svg: timurid() },
    { year: '20th century',  note: 'Soviet era',         svg: soviet() },
    { year: '2026',          note: 'Today',              svg: today() }
  ];
})();
