// * Navigation
var navbar = document.querySelector('nav ul')
// Hamburger Menu 🍔
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("nav-is-open")
  // Do something else, like open/close menu
}); 

// * Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');    

// Temp Code (For Maintaining scroll position)
// document.addEventListener("DOMContentLoaded", function(event) { 
//   var scrollpos = localStorage.getItem('scrollposition');
//   if (scrollpos) window.scrollTo(0, scrollpos);
// });

// window.onbeforeunload = function(e) { 
//   localStorage.setItem('scrollposition', window.scrollY); 
// }; 