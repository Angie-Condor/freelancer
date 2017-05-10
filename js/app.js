/*
 * Archivo principal de JS
 */

 var endScroll = 0;
window.addEventListener("scroll", function () {
  var headScroll = document.getElementById("head-scroll");
  var scroll = window.pageYOffset || document.body.scrollTop;
  if (scroll > endScroll) {
    headScroll.classList.add("header-style");
  }
  else{
    headScroll.classList.remove("header-style");
  }
});
