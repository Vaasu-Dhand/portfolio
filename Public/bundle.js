/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./JS/script.js ***!
  \**********************/
eval("// import './smooth-scroll'\r\n// import './splide'\r\n// import './fetchBlogs'\r\n\r\n// * Navigation\r\nvar navbar = document.querySelector('nav ul') \r\n// Hamburger Menu 🍔\r\n// Look for .hamburger\r\nvar hamburger = document.querySelector(\".hamburger\");\r\n// On click\r\nhamburger.addEventListener(\"click\", function() {\r\n  // Toggle class \"is-active\"\r\n  hamburger.classList.toggle(\"is-active\");\r\n  navbar.classList.toggle(\"nav-is-open\")\r\n  // Do something else, like open/close menu\r\n}); \r\n\r\n// * Smooth Scroll\r\nvar scroll = new SmoothScroll('a[href*=\"#\"]');  \r\n\r\n\r\n\r\n// Temp Code (For Maintaining scroll position)\r\n// document.addEventListener(\"DOMContentLoaded\", function(event) { \r\n//   var scrollpos = localStorage.getItem('scrollposition');\r\n//   if (scrollpos) window.scrollTo(0, scrollpos);\r\n// });\r\n\r\n// window.onbeforeunload = function(e) { \r\n//   localStorage.setItem('scrollposition', window.scrollY); \r\n// }; \r\n\r\n// console.log(process.env.API_KEY);\r\n\n\n//# sourceURL=webpack://portfolio/./JS/script.js?");
/******/ })()
;