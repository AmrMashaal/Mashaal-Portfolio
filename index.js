let read = document.querySelector(".read");
let information = document.querySelector(".information");

read.onclick = function () {
  information.classList.toggle("opacityShow");
  read.classList.toggle("readPlay");
};

let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

let spans = document.querySelectorAll(".skills span");
let section = document.querySelector("section");

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
});

function big() {
  if (document.documentElement.clientHeight >= 1250) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
}

big();
window.addEventListener("load", () => {
  let Open = document.querySelector(".open");
  Open.classList.add("loadingHidden");
});

let lag = document.querySelector(".lag");
let lagHolder = document.querySelector(".lag .holder");
lag.onclick = function () {
  lagHolder.classList.toggle("showLag");
};

let landing = document.querySelector(".landing .container");

window.addEventListener("load", function () {
  landing.classList.add("landingTop");
});

let services = document.querySelector(".services");
let servicesC = document.querySelector(".services .container");
window.addEventListener("scroll", function () {
  if (window.scrollY >= services.offsetTop - 400) {
    servicesC.classList.add("servicesBack");
  }
});

let projects = document.querySelector(".projects");
let projectsC = document.querySelector(".projects .container");

window.addEventListener("scroll", function () {
  if (window.scrollY >= projects.offsetTop - 500) {
    projectsC.classList.add("projectsUp");
  }
});

let headerI = document.querySelector("header .container i");
let beforeNav = document.querySelector(".beforeNav");
let headerNav = document.querySelector("header .container nav");
headerI.onclick = function (e) {
  headerNav.classList.add("headerNav");
  beforeNav.style.display = "block";
};

beforeNav.onclick = function (e) {
  beforeNav.style.display = "none";
  headerNav.classList.remove("headerNav");
};
