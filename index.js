let toUp = document.querySelector(".toUp");
window.onscroll = function () {
  if (window.scrollY >= 750) {
    toUp.classList.add("hiddin1");
  } else{
    toUp.classList.remove("hiddin1");
  }
};
toUp.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
