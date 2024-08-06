document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelector('.links-menu');
    const barras = document.querySelectorAll('.menu .barra');

    menu.addEventListener('click', function() {
        menuLinks.classList.toggle('open');
        barras.forEach((barra, index) => {
            barra.classList.toggle(`active-${index + 1}`);
        });
    });
});
