
const btnMenu = document.getElementById('menu');
const iconMenu = document.querySelector('#menu i');
const navContendor = document.getElementById('nav-contenedor');
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
});





linksNav.forEach((links, i) => {
    links.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(i);

        dropdownsContainers.forEach((drop, j) => {
            if (j === i && drop.classList.contains('dropdown--active')) {
                drop.classList.remove('dropdown--active');
            } else {
                drop.classList.toggle('dropdown--active', j === i);
            }
        });

        arrow.forEach((arrow, k) => arrow.classList.toggle('rotate-180', k === i));
    });

    // links.addEventListener('mouseenter', () =>{
    //     clearTimeout(timeoutIds[i]);
    //     dropdownsContainers[i].classList.add('dropdown--active');
    //     arrow.forEach((arrow, k) => arrow.classList.toggle('rotate-180', k === i));
    // });
    
    // links.addEventListener('mouseout', () => {
    //     timeoutIds[i] = setTimeout(() => {
    //         dropdownsContainers[i].classList.remove('dropdown--active');
    //     }, 300);
    // });

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



