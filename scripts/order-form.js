var orderSubmit = document.getElementById('order-form');
var surpriseSection = document.getElementById('surprise');

function createNewOrder(name, email, street, city, state, zip, amount, size, design) {
  this.name = name;
  this.email = email;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.amount = amount;
  this.size = size;
  this.design = design;
  this.status = 'pending';
}

var PendingOrders = {};

//show thank you video and create new order.
var runOrder = function(event) {
  event.preventDefault();

  console.log(event.target.email.value);

  if (!event.target.name.value || !event.target.email.value || !event.target.street.value || !event.target.city.value || !event.target.state.value || !event.target.zip.value || !event.target.number.value || !event.target.size.value || !event.target.design.value) {
    alert('Please fill out all the fields!');
  };

  var newCustomerName = event.target.name.value;
  var newEmail = event.target.email.value;
  var newStreet = event.target.street.value;
  var newCity = event.target.city.value;
  var newState = event.target.state.value;
  var newZip = event.target.zip.value;
  var newAmount = parseInt(event.target.number.value);
  var newSize = event.target.size.value;
  var newDesign = event.target.design.value;

  PendingOrders[name] = new createNewOrder(newCustomerName, newEmail, newStreet, newCity, newState, newZip, newAmount, newSize, newDesign);
  console.log('pending orders: ' + PendingOrders);

  event.target.name.value = null;
  event.target.email.value = null;
  event.target.street.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zip.value = null;
  event.target.number.value = null;
  event.target.size.value = null;
  event.target.design.value = null;

  surpriseSection.classList.remove('surpriseHide');
  window.scrollTo(0, 0);
};

orderSubmit.addEventListener('submit', runOrder);
