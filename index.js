let up = document.querySelector(".toUp");

window.onscroll = function () {
  if (window.scrollY >= 281.25) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let read = document.querySelector(".read");
let information = document.querySelector(".information");

read.onclick = function () {
  information.classList.toggle("opacityShow");
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

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 320) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
  if (window.innerWidth >= 1486) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
};
