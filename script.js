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
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function sendMail() {
  var params = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    message: document.getElementById("contactMsg").value,
  };

  if (!params.name || !params.email || !params.message) {
    document.getElementById("contact-deny").style.display = "flex";

    setTimeout(function () {
      document.getElementById("contact-deny").style.display = "none";
    }, 5000);
  } else {
    const serviceID = "service_4p9tiz9";
    const templateID = "template_qcpxthq";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("contactName").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactMsg").value = "";
        document.getElementById("contact-confirm").style.display = "flex";

        setTimeout(function () {
          document.getElementById("contact-confirm").style.display = "none";
        }, 5000);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
}
