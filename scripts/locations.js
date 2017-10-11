var generateReport = function () {
  var el = document.getElementById('stores');
  for (key in stores) {
    var currentStore = stores[key];
    var storeName = currentStore.storeName;
    console.log('Current store name is: ' + storeName);
    var div = document.createElement('div');
    var h = document.createElement('h3');
    var hText = document.createTextNode(storeName);
    h.appendChild(hText);
    div.appendChild(h);//append store name //END store name heading
    var addressP = document.createElement('p');//CREATE address
    var addressText = document.createTextNode('Address: ' + currentStore.address);
    console.log('address:' + currentStore.address);
    addressP.appendChild(addressText);
    div.appendChild(addressP);//END create min customer list item
    var phoneP = document.createElement('p');//CREATE max cust list item
    var phoneText = document.createTextNode('Phone: ' + currentStore.phone);
    console.log('phone:' + currentStore.phone);
    phoneP.appendChild(phoneText);
    div.appendChild(phoneP);//END create min customer list item
    div.className += 'store';
    el.appendChild(div);
  }
};

generateReport();
