var generateReport = function () {
  var el = document.getElementById('report');
  for (key in stores) {
    var currentStore = stores[key];
    var storeName = currentStore.storeName.toUpperCase();
    console.log('Current store name is: ' + storeName);
    var h = document.createElement('h1');
    var hText = document.createTextNode(storeName);
    h.appendChild(hText);
    el.appendChild(h);//append store name//END store name heading
    var minCustP = document.createElement('p');//CREATE min cust list item
    var minCustText = document.createTextNode('Minimum Customers: ' + currentStore.minCustomers);
    console.log('minimum customers:' + currentStore.minCustomers);
    minCustP.appendChild(minCustText);
    el.appendChild(minCustP);//END create min customer list item
    var maxCustP = document.createElement('p');//CREATE max cust list item
    var maxCustText = document.createTextNode('Maximum Customers: ' + currentStore.maxCustomers);
    console.log('maximum customers:' + currentStore.maxCustomers);
    maxCustP.appendChild(maxCustText);
    el.appendChild(maxCustP);//END create min customer list item
    var aveCookieP = document.createElement('p');//CREATE ave cookie sale list item
    var aveCookieText = document.createTextNode('Average Cookie Sale per customer: ' + currentStore.averageCookieSale);
    console.log('average cookie sale per customer:' + currentStore.averageCookieSale);
    aveCookieP.appendChild(aveCookieText);
    el.appendChild(aveCookieP);//END create min customer list item
    var ul = document.createElement('ul');//CREATE list
    currentStore.getCustomers();
    currentStore.getHourlyCookies();
    for(var i = 0; i < 15; i++){
      var currentHour = currentStore.hoursOpen[i];
      var hourCookies = Math.floor(currentStore.hourlyCookies[i]);
      var li = document.createElement('li');
      var liText = document.createTextNode(currentHour + ': ' + hourCookies + ' cookies');
      li.appendChild(liText);
      ul.appendChild(li);
    };

    el.appendChild(ul);//append list
  }
};

generateReport();
