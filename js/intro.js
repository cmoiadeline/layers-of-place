/* Opening: dig down through Samarkand's layers, counter runs back through time */
(function () {
  const intro = document.getElementById('intro');
  const ground = document.getElementById('ground');
  const counterYear = document.getElementById('counterYear');
  const counterNote = document.getElementById('counterNote');
  const introText = document.getElementById('introText');
  const skyline = document.getElementById('skyLine');
  const DURATION = 13000;
  const colors = ['#e3d6b5', '#d3c19a', '#b89f74', '#9a7f58', '#7a6141', '#5a4630', '#3b2d20'];

  const n = ERAS.length;
  ERAS.forEach((e, i) => {
    const b = document.createElement('div');
    b.className = 'band';
    b.style.background = colors[i % colors.length];
    b.textContent = e.label.toUpperCase() + '  ·  ' + e.note.toUpperCase();
    ground.appendChild(b);
  });
  skyline.innerHTML = SKYLINE_SVG;
  skyline.style.cssText = 'position:absolute;left:0;right:0;top:-88px;height:90px;transform:none';
  ground.appendChild(skyline);

  const bandH = () => window.innerHeight * 0.62;
  const fmt = y => (y < 0 ? Math.abs(Math.round(y)) + ' BCE' : String(Math.round(y)));
  const ease = t => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  let raf, start, done = false, lastIdx = -1;

  function frame(now) {
    if (!start) start = now;
    const t = Math.min(1, (now - start) / DURATION);
    const p = ease(t);
    ground.style.transform = `translateY(${-p * (n - 1) * bandH()}px)`;
    const pos = p * (n - 1);
    const i = Math.min(n - 2, Math.floor(pos));
    const f = pos - i;
    const year = ERAS[i].year + (ERAS[i + 1].year - ERAS[i].year) * f;
    counterYear.textContent = fmt(year);
    const idx = Math.round(pos);
    if (idx !== lastIdx) { lastIdx = idx; counterNote.textContent = ERAS[idx].label + ' · ' + ERAS[idx].note; }
    introText.style.opacity = p > 0.07 ? 0 : 1;
    if (t < 1) raf = requestAnimationFrame(frame);
    else setTimeout(finish, 900);
  }

  function finish() {
    if (done) return;
    done = true;
    cancelAnimationFrame(raf);
    sessionStorage.setItem('lop-intro', '1');
    intro.classList.add('out');
    window.dispatchEvent(new Event('introDone'));
    setTimeout(() => { intro.style.display = 'none'; }, 1000);
  }

  window.runIntro = function () {
    done = false; start = null; lastIdx = -1;
    intro.style.display = ''; intro.classList.remove('out');
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(frame);
  };

  document.getElementById('skip').addEventListener('click', finish);
  window.addEventListener('keydown', e => {
    if (!done && intro.style.display !== 'none' && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); finish(); }
  });

  if (sessionStorage.getItem('lop-intro') && !location.search.includes('intro')) {
    done = true; intro.style.display = 'none';
    setTimeout(() => window.dispatchEvent(new Event('introDone')), 0);
  } else {
    runIntro();
  }
})();
