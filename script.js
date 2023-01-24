hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = function() {
    navBar = document.querySelector("#nav-bar");
    navBar.classList.toggle("active");
}

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}