/*======================================
REAL PENTECOST
Global JavaScript
======================================*/

"use strict";

/*======================================
Sticky Navigation
======================================*/

const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navigation.classList.add("scrolled");

    } else {

        navigation.classList.remove("scrolled");

    }

});

/*======================================
Fade In Animation
======================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".fade-up").forEach((element) => {

    observer.observe(element);

});

/*======================================
Current Year
======================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*======================================
Mobile Navigation
======================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/*======================================
Close Mobile Navigation
======================================*/

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});