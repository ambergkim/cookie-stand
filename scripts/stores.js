var stores = {
  firstAndPike: {
    storeName: 'First And Pike',
    address: '1212 1st ave N, Seattle, WA 98118',
    phone: '(206)123-4567',
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
    address: '14643 14th st, Seattle, WA 98274',
    phone: '(206)123-4589',
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
  },
  seattleCenter: {
    storeName: 'Seattle Center',
    address: '12354 44th ave NE, Seattle, WA 98118',
    phone: '(206)123-4285',
    minCustomers: 11,
    maxCustomers: 38,
    averageCookieSale: 3.7,
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
  },
  capitolHill: {
    storeName: 'Capitol Hill',
    address: '123 5th ave W, Seattle, WA 98275',
    phone: '(206)123-1948',
    minCustomers: 20,
    maxCustomers: 38,
    averageCookieSale: 2.3,
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
  },
  alki: {
    storeName: 'Alki',
    address: '12354 6th ave SE, Seattle, WA 98240',
    phone: '(206)123-4769',
    minCustomers: 2,
    maxCustomers: 16,
    averageCookieSale: 4.6,
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
  },
};
