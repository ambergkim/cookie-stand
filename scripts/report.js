var head = document.getElementById('tableHead');

var fullTotals = [];

var createTableHeader = function() {
  var headRow = document.createElement('tr');
  var emptyCol = document.createElement('td');
  headRow.appendChild(emptyCol);
  for (var i = 0; i < 15; i++){
    var headTime = stores.firstAndPike.hoursOpen[i];
    var cell = document.createElement('td');
    var cellText = document.createTextNode(headTime);
    cell.appendChild(cellText);
    headRow.appendChild(cell);
  };
  var totalCell = document.createElement('td');
  var totalText = document.createTextNode('Daily Location Total');
  totalCell.appendChild(totalText);
  headRow.appendChild(totalCell);
  head.appendChild(headRow);
};

//TABLE BODY

var el = document.getElementById('tableBody');

var storeReport = function (currentStore){
  var storeName = currentStore.storeName;
  console.log('Current store name is: ' + storeName);
  var currentStoreRow = document.createElement('tr');
  var nameTd = document.createElement('td');
  var nameText = document.createTextNode(storeName);
  nameTd.appendChild(nameText);
  currentStoreRow.appendChild(nameTd);
  currentStore.getCustomers();
  currentStore.getHourlyCookies();
  var dailyTotal = 0;
  for (var i = 0; i < 15; i++){
    var hourCookies = Math.round((currentStore.hourlyCookies[i]));
    dailyTotal = dailyTotal + hourCookies;
    console.log('iteration ' + i + ' hour Cookies: ' + hourCookies);
    var td = document.createElement('td');
    var tdText = document.createTextNode(hourCookies);
    td.appendChild(tdText);
    currentStoreRow.appendChild(td);
  };
  var totalTd = document.createElement('td');
  var totalText = document.createTextNode(dailyTotal);
  totalTd.appendChild(totalText);
  currentStoreRow.appendChild(totalTd);
  el.appendChild(currentStoreRow);
  fullTotals.push(dailyTotal);
  console.log('full totals: ' + fullTotals);
};

//TABLE FOOTER

var tableFoot = document.getElementById('tFoot');

var createTableFooter = function(){
  var totals = [];
  for (key in stores) {
    var currentStore = stores[key];
    console.log('Footer current store: ' + currentStore.storeName);
    for (var i = 0; i < 15; i++) {
      if (totals[i]){
        totals[i] = totals[i] + currentStore.hourlyCookies[i];
        console.log('current store hourly cookies i: ' + i);
        console.log('Totals: ' + totals);
      } else {
        totals.push(currentStore.hourlyCookies[i]);
      };
    };
  };
  var tr = document.createElement('tr');
  var tdTitle = document.createElement('td');
  var tdTitleText = document.createTextNode('Totals');
  tdTitle.appendChild(tdTitleText);
  tr.appendChild(tdTitle);
  for (var i = 0; i < totals.length; i++) {
    var td = document.createElement('td');
    var tdText = document.createTextNode(Math.round(totals[i]));
    td.appendChild(tdText);
    tr.appendChild(td);
  };
  var finalTotal = 0;
  for (var i = 0; i < fullTotals.length; i++){
    finalTotal = Math.round(finalTotal + fullTotals[i]);
    console.log('final total: ' + finalTotal);
  }
  var finalTotalTd = document.createElement('td');
  var finalTotalText = document.createTextNode(finalTotal);
  finalTotalTd.appendChild(finalTotalText);
  tr.appendChild(finalTotalTd);
  tableFoot.appendChild(tr);
};

createTableHeader();

for (key in stores) {
  storeReport(stores[key]);
};

createTableFooter();
