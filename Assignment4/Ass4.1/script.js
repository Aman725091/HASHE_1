const themeToggleButton = document.getElementById('themeToggle');

// Check the current theme from localStorage (if any)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleButton.textContent = 'Switch to Light Theme';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Switch to Light Theme';
        localStorage.setItem('theme', 'dark');  // Save theme preference
    } else {
        themeToggleButton.textContent = 'Switch to Dark Theme';
        localStorage.removeItem('theme');  // Remove theme preference
    }
});
