document.addEventListener("DOMContentLoaded", function() {
    const mainNav = document.getElementById("mainNav");
    const fixedNav = document.getElementById("fixedNav");
    if (mainNav && fixedNav) {
        fixedNav.innerHTML = mainNav.innerHTML;
        fixedNav.className = mainNav.className + " clone-nav";
    }

    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", function() {
            const navMenu = document.querySelector(".nav-menu");
            if (navMenu) {
                navMenu.classList.toggle("active");
            }
        });
    }

    const currentPage = location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (currentPage === linkPage || 
            (currentPage === "" && linkPage === "index.html") || 
            (currentPage === "contact.html" && link.classList.contains("active"))) {
            link.classList.add("active");
        }
    });
});

window.addEventListener("scroll", function() {
    const fixedNav = document.getElementById("fixedNav");
    if (fixedNav) {
        if (window.scrollY > 100) {
            fixedNav.classList.add("active");
        } else {
            fixedNav.classList.remove("active");
        }
    }
});