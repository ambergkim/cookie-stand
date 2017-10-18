var el = document.getElementById('stores');

function StoreLocationInfo(name, address, phone) {
  this.storeName = name;
  this.address = address;
  this.phone = phone;
  this.render = function() {
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var nameText = document.createTextNode(this.storeName);
    h3.appendChild(nameText);
    div.appendChild(h3);
    var addressP = document.createElement('p');//CREATE address
    var addressText = document.createTextNode('Address: ' + this.address);
    addressP.appendChild(addressText);
    div.appendChild(addressP);//END create min customer list item
    var phoneP = document.createElement('p');//CREATE max cust list item
    var phoneText = document.createTextNode('Phone: ' + this.phone);
    phoneP.appendChild(phoneText);
    div.appendChild(phoneP);
    div.className += 'store';
    el.appendChild(div);
  };
}

var StoreLocations = {};
StoreLocations.firstAndPike = new StoreLocationInfo('First And Pike', '1212 1st ave N, Seattle, WA 98118', '(206)123-4567');
StoreLocations.seaTacAirport = new StoreLocationInfo('SeaTac Airport', '14643 14th st, Seattle, WA 98274', '(206)123-4589');
StoreLocations.seattleCenter = new StoreLocationInfo('Seattle Center', '12354 44th ave NE, Seattle, WA 98118', '(206)123-4285');
StoreLocations.capitolHill = new StoreLocationInfo('Capitol Hill', '123 5th ave W, Seattle, WA 98275', '(206)123-1948');
StoreLocations.alki = new StoreLocationInfo('Alki', '12354 6th ave SE, Seattle, WA 98240', '(206)123-4769');

for (key in StoreLocations) {
  StoreLocations[key].render();
}
