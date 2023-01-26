
window.onscroll = function() {myFunction()}
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function onScroll() {
  window.onscroll = function() {myFunction()}
}

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}