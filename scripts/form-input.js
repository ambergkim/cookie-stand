(function() {
  var form = document.getElementById('store-info');
  addEvent(form, 'click', function(e) {
    e.preventDefault();
    var elements = this.elements;
    var name = this.name.value;
    console.log('Form name: ' + this.name.value);
    var address = this.address.value;
    var phone = this.phone.value;
    var minCustomers = this.minCustomers.value;
    var maxCustomers = this.maxCustomers.value;
    var averageCookieSale = this.averageCookieSale.value;
    store.name = new Store(name, address, phone, minCustomers, maxCustomers, averageCookieSale);
    for (key in stores) {//run store report for all stores. creates table body
      storeReport(stores[key]);
    };
  });
}
);
