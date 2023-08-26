// Hamburger Menu
hamburger = document.querySelector("#hamburger-menu");
exitButton = document.querySelector("#exit-button");

hamburger.onclick = function () {
  navBar = document.querySelector("#nav-bar");
  navBar.classList.toggle("active");
};

exitButton.onclick = function () {
  navBar = document.querySelector("#nav-bar");
  navBar.classList.toggle("active");
};

// About me navigation
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
