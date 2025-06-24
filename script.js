document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('modo-escuro');
            themeToggle.checked = true;
        } else {
            body.classList.remove('modo-escuro');
            themeToggle.checked = false;
        }
    };
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.cabecalho-direita nav');
    
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});