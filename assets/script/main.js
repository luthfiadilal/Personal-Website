// MENU SHOW HIDDEN
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// HIDDEN MENU

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ACCORDING SKILLS

const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }

  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// QUALIFICATION TABS

const tabs = document.querySelectorAll("[data-target"),
  tabContents = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList, add("qualification-active");
  });
});

// SERVICE MODAL

const modalViews = document.querySelectorAll(".services-modal"),
  modalBtn = document.querySelectorAll(".services-button"),
  modalClose = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtn.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// PORTFLIO SWIPER
// import Swiper from "assets/script/swiper-bundle.min.js";
// import "assets/style/swiper-bundle.min.css";
let swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SCROLL SECTION ACTIVE LINK

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-headers");
  }
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 500) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

// DARK THEME

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// SUBMIT TO GOOGLE FORM

const scriptURL = "https://script.google.com/macros/s/AKfycbyzhfl2y68ebztiXXDcR-rkG1eoHwf3ZKqZ0r9v27Rj_yHj3p2iJBdf6xKWMjMBo7h0/exec";
const form = document.forms["submit-to-google-sheet"];
const alert = document.getElementsByClassName("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert.classList.toggle("alert-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
