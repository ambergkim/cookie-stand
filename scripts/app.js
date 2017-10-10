var el = document.getElementById('stores');

function displayInfo() {
  for (key in shops){
    var currentShop = shops[key];
    var storeArticle = document.createElement('article');
    var storeList = document.createElement('ul');//LIST start
    console.log(shops[key]);
    var storeName = currentShop.locationName;//create store name
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode(storeName.toUpperCase());
    h2.appendChild(h2Text);
    storeArticle.appendChild(h2);//END create store name
    var storeAddress = currentShop.address;//create store address
    var addressL = document.createElement('li');
    var addressText = document.createTextNode(storeAddress.number + ' ' + storeAddress.street + ' STE ' + storeAddress.ste + ', ' + storeAddress.city.toUpperCase() + ', ' + storeAddress.state.toUpperCase());
    addressL.appendChild(addressText);
    storeList.appendChild(addressL);//END create store address
    var phoneL = document.createElement('li');//create phone number
    var phoneText = document.createTextNode(currentShop.phone);
    phoneL.appendChild(phoneText);
    storeList.appendChild(phoneL);//END create store phone text
    var storeNetL = document.createElement('li');//create store net income report
    var storeNetText = document.createTextNode('Monthly Net Revenue: $' + currentShop.monthlyNet());
    storeNetL.appendChild(storeNetText);
    storeList.appendChild(storeNetL);//END create store net income report
    storeArticle.appendChild(storeList);
    el.appendChild(storeArticle);//add store name
  }
}

displayInfo();
