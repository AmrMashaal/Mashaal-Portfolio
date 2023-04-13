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
