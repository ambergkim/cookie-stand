var pendingHead = document.getElementById('pendingHead');
var pendingBody = document.getElementById('pendingBody');
var completedHead = document.getElementById('completedHead');
var completedBody = document.getElementById('completedBody');

var tableHeaderText = ['Order Number', 'Name', 'Email', 'Street', 'City', 'State', 'ZipCode', 'Number of Shirts', 'Size', 'Design', 'Complete Order'];

var createPendingHeader = function() {
  var headRow = document.createElement('tr');
  for (var i = 0; i < tableHeaderText.length; i++){
    var headText = tableHeaderText[i];
    var cell = document.createElement('td');
    var cellText = document.createTextNode(headText);
    cell.appendChild(cellText);
    headRow.appendChild(cell);//append cells
  };
  pendingHead.appendChild(headRow);//append row to table
};

createPendingHeader();

var createCompletedHeader = function() {
  var headRow = document.createElement('tr');
  for (var i = 0; i < tableHeaderText.length - 1; i++){
    var headText = tableHeaderText[i];
    var cell = document.createElement('td');
    var cellText = document.createTextNode(headText);
    cell.appendChild(cellText);
    headRow.appendChild(cell);//append cells
  };
  completedHead.appendChild(headRow);//append row to table
};

createCompletedHeader();

var orderNumber = 1;

var AllOrders = {};

function Order(name, email, street, city, state, zip, amount, size, design) {
  this.orderNumber = 'order' + orderNumber.toString();
  this.name = name;
  this.email = email;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.amount = amount;
  this.size = size;
  this.design = design;
  this.isPending = true;
  this.allInfo = [this.orderNumber, this.name, this.email, this.street, this.city, this.state, this.zip, this.amount, this.size, this.design];
  AllOrders[this.orderNumber] = this;
  this.completeOrder = function() {
    this.isPending = false;
    for (var i = 0; i < pendingBody.childNodes.length; i++) {
      pendingBody.deleteRow(i);
    };
    for (var i = 0; i < completedBody.childNodes.length; i++) {
      completedBody.deleteRow(i);
    }
  };
  this.render = function() {
    orderNumber++;
    var tr = document.createElement('tr');
    tr.setAttribute('id', this.name);
    console.log('order id name ' + this.name);
    for (var i = 0; i < this.allInfo.length; i++) {
      var td = document.createElement('td');
      var text = document.createTextNode(this.allInfo[i]);
      td.appendChild(text);
      tr.appendChild(td);
    }
    if (!this.isPending) {
      completedBody.appendChild(tr);
    } else {
      var buttonTd = document.createElement('td');
      var button = document.createElement('button');
      var buttonText = document.createTextNode('Complete');
      button.appendChild(buttonText);
      button.setAttribute('id', this.orderNumber);
      buttonTd.appendChild(button);
      tr.appendChild(buttonTd);
      pendingBody.appendChild(tr);
    }
    // var button = getElementById(this.orderNumber);
    // button.addEventListener('click', this.completeOrder);
  };
}

var Order1 = new Order('Amber', 'email@email.com', 'str', 'seattle', 'wa', '12345', 1, 'small', 'salmon');
Order1.render();
var Order2 = new Order('Steve', 'email@email.com', 'str', 'seattle', 'wa', '12345', 5, 'small', 'chinook');
Order2.render();
var Order2 = new Order('Bob', 'email@email.com', 'str', 'seattle', 'wa', '12345', 2, 'small', 'salmon');
Order2.render();
var Order2 = new Order('Tori', 'email@email.com', 'str', 'seattle', 'wa', '12345', 2, 'small', 'chinook');
Order2.render();

function reRender() {
  while (pendingBody.firstChild) {
    pendingBody.removeChild(pendingBody.firstChild);
  };
  while(completedBody.firstChild) {
    completedBody.removeChild(completedBody.firstChild);
  }
  for (key in AllOrders) {
    AllOrders[key].render();
  }
}

pendingBody.addEventListener('click', function(e){
  console.log('target id ' + e.target.getAttribute('id'));
  targetId = e.target.getAttribute('id');
  AllOrders[targetId].isPending = false;
  console.log(targetId + ' is pending? ' + AllOrders[targetId].isPending);
  reRender();
});
