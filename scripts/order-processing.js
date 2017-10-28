var pendingHead = document.getElementById('pendingHead');
var pendingBody = document.getElementById('pendingBody');
var completedHead = document.getElementById('completedHead');
var completedBody = document.getElementById('completedBody');

var tableHeaderText = ['Name', 'Email', 'Street', 'City', 'State', 'ZipCode', 'Number of Shirts', 'Size', 'Design', 'Complete Order'];

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
  this.allInfo = [this.name, this.email, this.street, this.city, this.state, this.zip, this.amount, this.size, this.design];
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
    for (var i = 0; i < this.allInfo.length; i++) {
      var td = document.createElement('td');
      var text = document.createTextNode(this.allInfo[i]);
      td.appendChild(text);
      tr.appendChild(td);
    }
    var buttonTd = document.createElement('td');
    var button = document.createElement('button');
    var buttonText = document.createTextNode('Complete');
    button.appendChild(buttonText);
    button.setAttribute('id', this.orderNumber);
    buttonTd.appendChild(button);
    tr.appendChild(buttonTd);
    if (this.isPending) {
      pendingBody.appendChild(tr);
    } else {
      completedBody.appendChild(tr);
    }
    var button = getElementById(this.orderNumber);
    button.addEventListener('click', this.completeOrder);
  };
}

var Order1 = new Order('a', 'email@email.com', 'str', 'seattle', 'wa', '12345', 1, 'small', 'salmon');
Order1.render();


//
// //store form
// var storeForm = document.getElementById('store-form');
// //event submission
// function storeFormSubmit(event){
//   event.preventDefault();
//
//   if (!event.target.store_name.value || !event.target.min_customers.value || !event.target.max_customers.value || !event.target.average_sales) {
//     alert('Please fill out all the fields!');
//   };
//
//   var newStoreName = event.target.store_name.value;
//   var newMinCustomers = parseInt(event.target.min_customers.value);
//   var newMaxCustomers = parseInt(event.target.max_customers.value);
//   var newAverageCookieSale = parseInt(event.target.average_sales.value);
//
//   var matchingStoreFound = false;
//
//   for (key in Stores) {
//     if (Stores[key].storeName.toLowerCase() === newStoreName.toLowerCase()) {
//       Stores[key].minCustomers = newMinCustomers;
//       Stores[key].maxCustomers = newMaxCustomers;
//       Stores[key].averageCookieSale = newAverageCookieSale;
//       matchingStoreFound = true;
//       for (var i = 0; i < tableBody.childNodes.length; i++) {
//         tableBody.deleteRow(i);
//         table2Body.deleteRow(i);
//       }
//       for (key in Stores) {
//         Stores[key].render();
//       }
//     }
//   }
//
//   if (!matchingStoreFound) {
//     var NewStore = new Store(newStoreName, newMinCustomers, newMaxCustomers, newAverageCookieSale);
//     Stores[newStoreName] = NewStore;
//     NewStore.render();
//   }
//
//   event.target.store_name.value = null;
//   event.target.min_customers.value = null;
//   event.target.max_customers.value = null;
//   event.target.average_sales = null;
//
//   tableFoot.deleteRow(0);
//   createTableFooter();
//
// };
// //Event Listener
// storeForm.addEventListener('submit', storeFormSubmit);
// //Clear List or Reset Button
// var resetTable = document.getElementById('reset-table');
// resetTable.addEventListener('click', function() {
//   var i = 0;
//   for (key in Stores) {
//     i++;
//   }
//   for (var j = tableBody.childNodes.length; j > i + 1; j--) {
//     tableBody.removeChild(tableBody.lastChild);
//   }
//   for (var k = table2Body.childNodes.length; k > i + 1; k--) {
//     table2Body.removeChild(table2Body.lastChild);
//   }
// }
// );
