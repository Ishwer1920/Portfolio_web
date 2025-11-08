// Select the hamburger menu and the navigation menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", mobileMenu);

// Add click event listeners to the nav links to close the menu
navLinks.forEach(link => link.addEventListener("click", closeMenu));

// Function to toggle the mobile menu
function mobileMenu() {
    // Toggles the 'active' class on the hamburger icon (for the X)
    hamburger.classList.toggle("active");
    
    // Toggles the 'active' class on the nav menu (to show/hide it)
    navMenu.classList.toggle("active");
}

// Function to close the mobile menu
function closeMenu() {
    // Removes the 'active' class so the menu hides
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}