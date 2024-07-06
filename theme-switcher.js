document.addEventListener('DOMContentLoaded', function() {
  const themeToggleForward = document.getElementById('theme-toggle');
  const themeIconForward = document.getElementById('theme-icon');
  const themeToggleBackward = document.getElementById('theme-toggle-back');
  const themeIconBackward = document.getElementById('theme-icon-back');
  const themes = ['default-theme','batman', 'elsa', 'deadpool'];
  let currentThemeIndex = 0;

  themeToggleForward.addEventListener('click', function() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.getElementById('theme-link').href = `${themes[currentThemeIndex]}.css`;
    updateThemeIcon();
  });

  themeToggleBackward.addEventListener('click', function() {
    currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
    document.getElementById('theme-link').href = `${themes[currentThemeIndex]}.css`;
    updateThemeIcon();
  });

  updateThemeIcon(); // Initialize the correct icon on load
});
