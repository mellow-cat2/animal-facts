document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');

  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if(toggle) toggle.textContent = '☀️ Light Mode';
  }

  if(toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        toggle.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        toggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }
});
