console.log('initiate nav');

var navButton = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

var showHideNav = function(event) {
  event.preventDefault();
  if (navLinks.classList.contains('navHide')) {
    navLinks.classList.remove('navHide');
  } else {
    navLinks.className += ' navHide';
  }
};

navButton.addEventListener('click', showHideNav);
