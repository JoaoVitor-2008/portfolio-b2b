javascript
// MENU RESPONSIVO
export function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Evita erro caso os elementos não existam
    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        // Liga/desliga a classe active no container .nav-menu
        navMenu.classList.toggle('active');

        // Atualiza acessibilidade
        const isExpanded = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', String(isExpanded));
    });

    // Fecha o menu ao clicar em qualquer link da navegação
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
