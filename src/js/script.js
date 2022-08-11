'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu'); 
    const header = document.querySelector('.header'); 

    //Header
    window.addEventListener('scroll', () => {

        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }); 

    function burgerActions() {
        let burgerAL = burgerBtn.getAttribute('aria-label');
        burgerAL === 'Открыть меню' ? burgerBtn.setAttribute('aria-label', 'Закрыть меню') : burgerBtn.setAttribute('aria-label', 'Открыть меню');
    }

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        headerMenu.classList.toggle('active');   
        
        burgerActions();
    });

    function removeActive() {
        if (headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');              
        }

        if (burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active');
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {           
            removeActive();  
            burgerActions();
        }
    });

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.header__menu') && !target.closest('.header__burger') &&
            burgerBtn.classList.contains('active')) {
            removeActive();
            burgerActions();
        }

        if (target.classList.contains('header__link')) {
            removeActive();
            burgerActions();
        }
    });

    //Animation
    gsap.from('.wrapper', {
        opacity: 0,
        duration: 1        
    });

    gsap.from('.header', {
        opacity: 0,
        delay: 1,
        duration: 1
    });

    gsap.from('.home__title', {
        opacity: 0,
        delay: 2,
        duration: 1.5,
        yPercent: 100
    });

    gsap.from('.home__bg-image', {
        opacity: 0,
        delay: 1,
        duration: 1
    });

    gsap.from('.home__descr', {
        opacity: 0,
        delay: 3.5,
        duration: 1.5,
        yPercent: 100
    });
    
    gsap.from('.home__help', {
        opacity: 0,
        delay: 3.5,
        duration: 1.5,
        yPercent: 200
    });

    gsap.from('.home__text', {
        opacity: 0,
        delay: 3.5,
        duration: 1.5,
        yPercent: 150
    });

    gsap.from('.home__ginger', {
        opacity: 0,
        delay: 5,
        duration: 0.5
    });

    gsap.from('.home__lemon', {
        opacity: 0,
        delay: 6,
        duration: 0.5
    });

    gsap.from('.home__box', {
        opacity: 0,
        delay: 5.5,
        duration: 0.5
    });

    gsap.from('.promo', {
        opacity: 0,
        delay: 6.5,
        duration: 1
    });
});