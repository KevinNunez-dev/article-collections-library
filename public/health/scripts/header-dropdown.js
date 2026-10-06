document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach((dd) => {
    const btn = dd.querySelector('.nav-link');
    if (!btn) return;
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', (e) => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      dd.classList.toggle('open', !expanded);
    });
    // close when clicking outside
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        dd.classList.remove('open');
      }
    });
  });
});
