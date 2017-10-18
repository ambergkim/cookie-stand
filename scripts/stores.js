var head = document.getElementById('tableHead');
var tableBody = document.getElementById('tableBody');
var tableFoot = document.getElementById('tFoot');
var table2Head = document.getElementById('table2Head');
var table2Body = document.getElementById('table2Body');

var tableHeader = ['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Daily Location Total'];

var hourlyTotals = [];

var allStoreTotal = 0;

var createTableHeader = function() {
  var headRow = document.createElement('tr');
  for (var i = 0; i < tableHeader.length; i++){//load title cells
    var headTime = tableHeader[i];
    var cell = document.createElement('td');
    var cellText = document.createTextNode(headTime);
    cell.appendChild(cellText);
    headRow.appendChild(cell);//append cells
  };
  head.appendChild(headRow);//append row to table
};

createTableHeader();

function Store(name, minCustomers, maxCustomers, averageCookieSale) {
  this.storeName = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  this.getCustomers = function() {
    this.hourlyCustomers = [];//reset hourly customers
    for (i = 0;i < 15; i++){
      var randomNum = Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
      this.hourlyCustomers.push(randomNum);
    }
  };
  this.getHourlyCookies = function() {
    this.hourlyCookies = []; //reset hourly cookie sales
    for (i = 0; i < 15; i++) {
      var cookies = Math.floor(this.averageCookieSale * this.hourlyCustomers[i]);
      this.hourlyCookies.push(cookies);
      this.dailyTotal += cookies;
      if (hourlyTotals.length < 15) {
        hourlyTotals.push(cookies);
        allStoreTotal += cookies;
      } else {
        hourlyTotals[i] += cookies;
        allStoreTotal += cookies;
      }
      hourlyTotals.push(allStoreTotal);
    }
    this.hourlyCookies.push(this.dailyTotal);
  };
  this.render = function() {
    this.getCustomers();
    this.getHourlyCookies();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var nameText = document.createTextNode(this.storeName);
    td.appendChild(nameText);
    tr.appendChild(td);
    for (i = 0; i < 16; i++) {
      var td = document.createElement('td');
      var textTd = document.createTextNode(this.hourlyCookies[i]);
      td.appendChild(textTd);
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  };
}

var Stores = {};
Stores.firstAndPike = new Store('First And Pike', 23, 65, 6.3);
Stores.seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
Stores.seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
Stores.capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
Stores.alki = new Store('Alki', 2, 16, 4.6);

for (key in Stores) {
  Stores[key].render();
}

//generate table footer
var createTableFooter = function() {
  var footTr = document.createElement('tr');
  var footTd = document.createElement('td');
  var totalsText = document.createTextNode('Totals');
  footTd.appendChild(totalsText);
  footTr.appendChild(footTd);
  for (var i = 0; i < 15; i++){//load title cells
    var currentTotal = hourlyTotals[i];
    var footTd = document.createElement('td');
    var footText = document.createTextNode(currentTotal);
    footTd.appendChild(footText);
    footTr.appendChild(footTd);//append cells
  };
  var footTotalTd = document.createElement('td');
  var footTotalText = document.createTextNode(allStoreTotal);
  footTotalTd.appendChild(footTotalText);
  footTr.appendChild(footTotalTd);
  tableFoot.appendChild(footTr);//append row to table
};

createTableFooter();

//store form
var storeForm = document.getElementById('store-form');
//event submission
function storeFormSubmit(event){
  event.preventDefault();

  if (!event.target.store_name.value || !event.target.min_customers.value || !event.target.max_customers.value || !event.target.average_sales) {
    alert('Please fill out all the fields!');
  };
  var storeName = event.target.store_name.value;
  var minCustomers = parseInt(event.target.min_customers.value);
  var maxCustomers = parseInt(event.target.max_customers.value);
  var averageCookieSale = parseInt(event.target.average_sales.value);

  var NewStore = new Store(storeName, minCustomers, maxCustomers, averageCookieSale);

  NewStore.render();

  event.target.store_name.value = null;
  event.target.min_customers.value = null;
  event.target.max_customers.value = null;
  event.target.average_sales = null;

  tableFoot.deleteRow(0);
  createTableFooter();

};
//Event Listener
storeForm.addEventListener('submit', storeFormSubmit);
//Clear List or Reset Button
var resetTable = document.getElementById('reset-table');
resetTable.addEventListener('click', function() {
  var i = 0;
  for (key in Stores) {
    i++;
  }
  for (var j = tableBody.childNodes.length; j > i + 1; j--) {
    tableBody.removeChild(tableBody.lastChild);
  }
}
);
