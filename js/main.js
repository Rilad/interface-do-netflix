function assistir() {
    window.location.href = "https://www.youtube.com/watch?v=8QnMmpfKWvo";
}

function informacoes() {
    window.location.href = "https://www.themoviedb.org/tv/1425-house-of-cards?language=pt-BR";
}

/*Create a sticky navbar */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}