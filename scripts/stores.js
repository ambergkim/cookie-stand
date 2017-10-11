var stores = {
  firstAndPike: {
    storeName: 'First And Pike',
    minCustomers: 23,
    maxCustomers: 65,
    averageCookieSale: 6.3,
    hourlyCustomers: [],
    hourlyCookies: [],
    hoursOpen: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    getCustomers: function() {
      this.hourlyCustomers = [];//reset hourly customers
      for (i = 0;i < 15; i++){
        this.hourlyCustomers.push(Math.floor(Math.random() * 65));
        console.log(this.hourlyCustomers);
      }
    },
    getHourlyCookies: function() {
      this.hourlyCookies = []; //reset hourly cookie sales
      for (i = 0; i < 15; i++) {
        this.hourlyCookies.push(this.averageCookieSale * this.hourlyCustomers[i]);
        console.log(this.hourlyCookies);
      }
    },
  },
  seaTacAirport: {
    storeName: 'SeaTac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    averageCookieSale: 1.2,
    hoursOpen: 15,
    hourlyCustomers: [],
    hourlyCookies: [],
    hoursOpen: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
    getCustomers: function() {
      this.hourlyCustomers = [];//reset hourly customers
      for (i = 0;i < 15; i++){
        this.hourlyCustomers.push(Math.floor(Math.random() * 65));
        console.log(this.hourlyCustomers);
      }
    },
    getHourlyCookies: function() {
      this.hourlyCookies = []; //reset hourly cookie sales
      for (i = 0; i < 15; i++) {
        this.hourlyCookies.push(this.averageCookieSale * this.hourlyCustomers[i]);
        console.log(this.hourlyCookies);
      }
    },
  }
};
