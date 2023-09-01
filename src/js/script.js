
const btnMenu = document.getElementById('menu');
const iconMenu = document.querySelector('#menu i');
const navContendor = document.getElementById('nav-contenedor');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const navContent = document.getElementById('nav-content');
const linksNav = document.querySelectorAll('#nav-link');
const dropdownsContainers = document.querySelectorAll('#dropdown');
const arrow = document.querySelectorAll('.fa-chevron-down');

let timeoutIds = [];

console.log(arrow);


btnMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    navContendor.classList.toggle('nav__container--active');
    navContent.classList.toggle('nav__content--active');
    iconMenu.classList.toggle('fa-bars');
    iconMenu.classList.toggle('fa-close');

    // Habilita o deshabilita el desplazamiento del body según el estado del menú
    if (navContendor.classList.contains('nav__container--active')) {
        document.body.classList.add('overflow-hidden');
        main.classList.add('blur-sm');
        footer.classList.add('blur-sm');
    } else {
        document.body.classList.remove('overflow-hidden');
        main.classList.remove('blur-sm');
        footer.classList.remove('blur-sm');
    }
});





linksNav.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownsContainers.forEach((drop, j) => {
            if (j === i) {
                drop.classList.toggle('dropdown--active');
                const isDropdownActive = drop.classList.contains('dropdown--active');
                arrow[i].classList.toggle('rotate-180', isDropdownActive);
            } else {
                drop.classList.remove('dropdown--active');
                arrow[j].classList.remove('rotate-180');
            }
        });
    });
});


let ubicacionPrincipal = 0;

window.addEventListener('scroll', () => {
    const desplazamientoActual = window.pageYOffset;
    const headerElement = document.getElementById("header");

    if (headerElement) {
        if (ubicacionPrincipal >= desplazamientoActual) {
            headerElement.style.top = '0px';

            if (ubicacionPrincipal <= 10) {
                headerElement.style.backgroundColor = 'transparent';
            }
        } else {
            headerElement.style.top = '-200px';
            headerElement.style.backgroundColor = 'hsl(240, 10%, 16%)';
        }

        ubicacionPrincipal = desplazamientoActual;
    }
});



window.addEventListener('resize', () => {
    if(window.innerWidth >= 718){

        const isMenuActive = document.querySelector('.nav__container--active');

        if(isMenuActive){
            navContendor.classList.remove('nav__container--active');
            navContent.classList.remove('nav__content--active');
            iconMenu.classList.remove('fa-close');
            iconMenu.classList.add('fa-bars');
            document.body.classList.remove('overflow-hidden');
        }
    }
});