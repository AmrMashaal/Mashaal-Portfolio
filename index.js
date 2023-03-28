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
let promat1 = document.querySelector(".promat");
let promat2 = document.querySelector(".close");
promat1.innerHTML = "Hello My Friend <3";
setTimeout(function () {
  promat1.style.left = "0";
}, 1000);
promat2.onclick = function () {
  promat1.remove();
  promat2.remove();
};
setTimeout(function () {
  promat2.style.left = "280px";
}, 2000);
