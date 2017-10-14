var head = document.getElementById('tableHead');

var fullTotals = []; //info for last column of hourly cookie table

//TABLE HEADER

var createTableHeader = function(tableHeader) {
  var headRow = document.createElement('tr');
  var emptyCol = document.createElement('td');
  headRow.appendChild(emptyCol);//append empty cell
  for (var i = 0; i < 15; i++){//load title cells
    var headTime = stores.firstAndPike.hoursOpen[i];
    var cell = document.createElement('td');
    var cellText = document.createTextNode(headTime);
    cell.appendChild(cellText);
    headRow.appendChild(cell);//append cells
  };
  var totalCell = document.createElement('td');
  var totalText = document.createTextNode('Daily Location Total');
  totalCell.appendChild(totalText);
  headRow.appendChild(totalCell);//append total cell
  tableHeader.appendChild(headRow);//append row to table
};

//TABLE BODY

var el = document.getElementById('tableBody');

var storeReport = function (currentStore){
  var storeName = currentStore.storeName;//get a store
  console.log('Current store name is: ' + storeName);
  var currentStoreRow = document.createElement('tr');
  var nameTd = document.createElement('td');
  var nameText = document.createTextNode(storeName);
  nameTd.appendChild(nameText);
  currentStoreRow.appendChild(nameTd);//append title cell
  currentStore.getCustomers();//generate customers
  currentStore.getHourlyCookies();//generate hourly cookies
  var dailyTotal = 0;
  for (var i = 0; i < 15; i++){
    var hourCookies = Math.round((currentStore.hourlyCookies[i]));
    dailyTotal = dailyTotal + hourCookies;
    console.log('iteration ' + i + ' hour Cookies: ' + hourCookies);
    var td = document.createElement('td');
    var tdText = document.createTextNode(hourCookies);
    td.appendChild(tdText);
    currentStoreRow.appendChild(td);//append cells
  };
  var totalTd = document.createElement('td');
  var totalText = document.createTextNode(dailyTotal);
  totalTd.appendChild(totalText);
  currentStoreRow.appendChild(totalTd);//append total cell
  el.appendChild(currentStoreRow);//append row
  fullTotals.push(dailyTotal);//
  console.log('full totals: ' + fullTotals);//add to last column array.
};

//TABLE FOOTER

var tableFoot = document.getElementById('tFoot');

var createTableFooter = function(){
  var totals = [];//create cookies totals array for last row
  for (key in stores) {
    var currentStore = stores[key];//get a store
    console.log('Footer current store: ' + currentStore.storeName);
    for (var i = 0; i < 15; i++) {//adds the hourly cookies
      if (totals[i]){//if there is already a value
        totals[i] = totals[i] + currentStore.hourlyCookies[i];
        console.log('current store hourly cookies i: ' + i);
        console.log('Totals: ' + totals);
      } else {//if there are no values in array
        totals.push(currentStore.hourlyCookies[i]);
      };
    };
  };
  var tr = document.createElement('tr');
  var tdTitle = document.createElement('td');
  var tdTitleText = document.createTextNode('Totals');
  tdTitle.appendChild(tdTitleText);
  tr.appendChild(tdTitle);//appends the last row title
  for (var i = 0; i < totals.length; i++) {//loop through totals and add cells
    var td = document.createElement('td');
    var tdText = document.createTextNode(Math.round(totals[i]));
    td.appendChild(tdText);
    tr.appendChild(td);
  };
  var finalTotal = 0;//the day totals. last row, last column
  for (var i = 0; i < fullTotals.length; i++){//adds all the cookies
    finalTotal = Math.round(finalTotal + fullTotals[i]);
    console.log('final total: ' + finalTotal);
  }
  var finalTotalTd = document.createElement('td');
  var finalTotalText = document.createTextNode(finalTotal);
  finalTotalTd.appendChild(finalTotalText);
  tr.appendChild(finalTotalTd);//append final total to row
  tableFoot.appendChild(tr);//add row to table foot
};

createTableHeader(head);//create 1st table header

for (key in stores) {//run store report for all stores. creates table body
  storeReport(stores[key]);
};

createTableFooter();//create table footer for first table

//COOKIE TOSSER REPORT TABLE.

var table2Head = document.getElementById('table2Head');
createTableHeader(table2Head);

var table2Body = document.getElementById('table2Body');

var tosserReport = function (currentStore){
  var storeName = currentStore.storeName;
  console.log('Current store name is: ' + storeName);
  var currentStoreRow = document.createElement('tr');
  var nameTd = document.createElement('td');
  var nameText = document.createTextNode(storeName);
  nameTd.appendChild(nameText);
  currentStoreRow.appendChild(nameTd);//add row title
  currentStore.getCustomers();//generate customers
  currentStore.getHourlyCookies();//generate hourly cookies
  var dailyTotal = 0;//the total cookies of the day
  for (var i = 0; i < 15; i++){
    var hourCustomers = Math.round((currentStore.hourlyCustomers[i]));
    var hourTossers = Math.ceil(hourCustomers / 20);//calculate needed tossers
    if (hourTossers === 1) {//minimum tossers is 2
      hourTossers = 2;
    }
    if (dailyTotal < hourTossers) {//find the highest tossers needed at one point
      dailyTotal = hourTossers;
    };
    console.log('Daily Total Tossers: ' + dailyTotal);
    console.log('iteration ' + i + ' hour Cookies: ' + hourTossers);
    var td = document.createElement('td');
    var tdText = document.createTextNode(hourTossers);
    td.appendChild(tdText);
    currentStoreRow.appendChild(td);//add cell to row
  };
  var totalTd = document.createElement('td');
  var totalText = document.createTextNode(dailyTotal);
  totalTd.appendChild(totalText);
  currentStoreRow.appendChild(totalTd);//add last cells to row
  table2Body.appendChild(currentStoreRow);//add row to table body
};

for (key in stores) {//run tosser report on all stores
  tosserReport(stores[key]);
};
