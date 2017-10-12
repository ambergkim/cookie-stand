function Store(name, address, phone, minCustomers, maxCustomers, averageCookieSale) {
  this.storeName = name;
  this.address = address;
  this.phone = phone;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookieSale = averageCookieSale;
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  this.hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
  this.getCustomers = function() {
    this.hourlyCustomers = [];//reset hourly customers
    for (i = 0;i < this.hoursOpen.length; i++){
      this.hourlyCustomers.push((Math.random() * 100));
      console.log(this.hourlyCustomers);
    }
  };
  this.getHourlyCookies = function() {
    this.hourlyCookies = []; //reset hourly cookie sales
    for (i = 0; i < this.hoursOpen.length; i++) {
      this.hourlyCookies.push(this.averageCookieSale * this.hourlyCustomers[i]);
      console.log(this.hourlyCookies);
    }
  };
}

var stores = {};
stores.firstAndPike = new Store('First And Pike', '1212 1st ave N, Seattle, WA 98118', '(206)123-4567', 23, 65, 6.3);
stores.seaTacAirport = new Store('SeaTac Airport', '14643 14th st, Seattle, WA 98274', '(206)123-4589', 3, 24, 1.2);
stores.seattleCenter = new Store('Seattle Center', '12354 44th ave NE, Seattle, WA 98118', '(206)123-4285', 11, 38, 3.7);
stores.capitolHill = new Store('Capitol Hill', '123 5th ave W, Seattle, WA 98275', '(206)123-1948', 20, 38, 2.3);
stores.alki = new Store('Alki', '12354 6th ave SE, Seattle, WA 98240', '(206)123-4769', 2, 16, 4.6);
