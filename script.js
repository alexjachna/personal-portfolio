hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = function() {
    navBar = document.querySelector("#nav-bar");
    navBar.classList.toggle("active");
}