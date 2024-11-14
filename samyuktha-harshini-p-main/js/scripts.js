/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
// JavaScript to handle toggle button behavior
document.addEventListener('DOMContentLoaded', function () {
    var navToggler = document.querySelector('.navbar-toggler');
    var navbarResponsive = document.querySelector('#navbarResponsive');

    navToggler.addEventListener('click', function () {
        navbarResponsive.classList.toggle('show');
    });
});

function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}
// script.js

function toggleProject(element) {
    const details = element.querySelector('.project-details');
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// JavaScript function to toggle each skill category's visibility
function toggleCategory(id) {
    const section = document.getElementById(id);
    const isVisible = section.style.display === "block";
    section.style.display = isVisible ? "none" : "block";

    // Toggle the "+" and "-" symbol
    const toggleButton = section.previousElementSibling.querySelector("span");
    toggleButton.textContent = isVisible ? "+" : "-";
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        // Get the div element
        var divElement = document.getElementById("imageDiv");
        
        // Set the image as the background of the div
        divElement.style.backgroundImage = "url('assets/img/rock cllimbing.jpeg')";
      });
    // To open the certifications
    /*document.getElementById('comptia').addEventListener('click', function() {
        window.open('C:/Users/samyu/Documents/CYSE CERTI/Comptia Security+.pdf', '_blank');
    });
    document.getElementById('gcyse').addEventListener('click', function() {
        window.open("C:/Users/samyu/Documents/CYSE CERTI/Coursera google.pdf", '_blank');
    }); */
});
