document.addEventListener("DOMContentLoaded", () => {
    
    // --- Page Navigation Logic ---
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            const pageId = link.getAttribute("data-page");

            // 1. Update Active Page
            pages.forEach(page => {
                if (page.id === pageId) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });

            // 2. Update Active Nav Link
            navLinks.forEach(nav => {
                if (nav.getAttribute("data-page") === pageId) {
                    nav.classList.add("active");
                } else {
                    nav.classList.remove("active");
                }
            });

            // 3. Close hamburger menu on click
            if (window.innerWidth <= 768) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }

            // 4. Scroll to top of new page
            window.scrollTo(0, 0);
        });
    });

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

});