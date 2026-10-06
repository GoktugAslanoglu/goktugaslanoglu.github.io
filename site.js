(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const meta = document.querySelector('meta[name="theme-color"]');
  function applyTheme(theme) {
    root.dataset.theme = theme;
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    meta.content = theme === 'dark' ? '#0c1218' : '#f6f8fa';
  }
  try {
    const saved = localStorage.getItem('homepage-theme');
    if (saved === 'light' || saved === 'dark') applyTheme(saved);
  } catch { /* The default theme also works without browser storage. */ }
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('homepage-theme', theme); } catch { /* Storage is optional. */ }
  });
})();
