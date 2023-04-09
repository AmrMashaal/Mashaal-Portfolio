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
