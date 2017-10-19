var orderSubmit = document.getElementById('orderSubmit');
var surpriseSection = document.getElementById('surprise');

var showHideSurprise = function(event) {
  event.preventDefault();
  surpriseSection.classList.remove('surpriseHide');
  window.scrollTo(0, 0);
};

orderSubmit.addEventListener('click', showHideSurprise);
