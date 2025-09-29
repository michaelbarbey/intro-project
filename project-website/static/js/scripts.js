/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/*
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.style.top = '-100px'; // Hide the navbar
    } else {
        // Scrolling up
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollY = window.scrollY; // Update last scroll position
});

*/

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');
const navContent = document.querySelector('#navbarSupportedContent');

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    // if the menu is open, don't hide the navbar on scroll
    if (navContent.classList.contains('show')) {
        return;
    }

    // always show navbar when at the top of the page
    if (currentScrollPos === 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    // show or hide navbar based on scroll direction only if menu is closed
    if (prevScrollPos > currentScrollPos) {
        // scrolling up: Show the navbar
        navbar.style.transform = 'translateY(0)';
    } else {
        // scrolling down: Hide the navbar
        navbar.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    navContent.classList.toggle('show');
});