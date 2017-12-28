// When the user scrolls the page, execute unction
window.onscroll = function() {fixedHeader()};

// Get the header
var header = document.getElementById("header");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedHeader() {
  if (window.pageYOffset >= 500) {
    header.classList.add("header-edit");
  } else {
    header.classList.remove("header-edit");
  }
}
