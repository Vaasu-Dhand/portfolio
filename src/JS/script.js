import 'babel-polyfill';  
import SmoothScroll from 'smooth-scroll';

import './fetchBlogs'

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

console.log("Hello");
 