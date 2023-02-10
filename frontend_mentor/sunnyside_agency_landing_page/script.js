/*
Name: Peter Jungers
Date: January 2023
Exercise: Sunnyside agency landing page
*/


// Mobile navigation menu:
window.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const hamburgerImg = document.querySelector("#hamburger-icon img");
    const navMobile = document.querySelector("header #nav-mobile");

    function toggleNavMenu() {
        hamburgerIcon.addEventListener("click", () => {
            navMobile.classList.toggle("active");
            toggleHamburgerIcon();
            closeNavMenuOnResize();
        });
    }

    function toggleHamburgerIcon() {
        if (navMobile.classList.contains("active")) {
            hamburgerImg.src = "images/icon-hamburger-alpha-50.svg";
        } else {
            hamburgerImg.src = "images/icon-hamburger.svg";
        }
    }

    function closeNavMenuOnResize() {
        window.addEventListener("resize", () => {
            if (navMobile.classList.contains("active")) {
                navMobile.classList.toggle("active");
            }
            toggleHamburgerIcon();
        });
    }

    return toggleNavMenu();
});


function socialMediaImgHover() {
    const socialMedia = document.querySelectorAll(".social-media")

    socialMedia.forEach(img => {
        img.addEventListener("mouseover", () => {
            if (img.id === "facebook") {
                img.src = "images/icon-facebook-white.svg";
            } else if (img.id === "instagram") {
                img.src = "images/icon-instagram-white.svg";
            } else if (img.id === "twitter") {
                img.src = "images/icon-twitter-white.svg";
            } else if (img.id === "pinterest") {
                img.src = "images/icon-pinterest-white.svg";
            }
        });

        img.addEventListener("mouseout", () => {
            if (img.id === "facebook") {
                img.src = "images/icon-facebook-dark-moderate-cyan.svg";
            } else if (img.id === "instagram") {
                img.src = "images/icon-instagram-dark-moderate-cyan.svg";
            } else if (img.id === "twitter") {
                img.src = "images/icon-twitter-dark-moderate-cyan.svg";
            } else if (img.id === "pinterest") {
                img.src = "images/icon-pinterest-dark-moderate-cyan.svg";
            }
        });
    });
}

window.addEventListener("DOMContentLoaded", socialMediaImgHover);
