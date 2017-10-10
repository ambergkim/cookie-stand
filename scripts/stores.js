var shops = {
  seattleShop: {
    locationName: 'seattle',
    address: {
      street: '5th ave N',
      number: 12058,
      ste: 200,
      city: 'seattle',
      state: 'wa'
    },
    daysOpen: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false
    },
    phone: '(123)4567-890',
    email: 'seattle@salmoncookies.com',
    manager: 'michelle',
    employees: ['mark', 'angela', 'harper', 'bob'],
    isOpen: function(day) {
      return this.daysOpen[day];
    },
    monthlyIncome: 25000,
    monthlyExpense: 10000,
    monthlyNet: function(){
      return this.monthlyIncome - this.monthlyExpense;
    }
  },
  bellevueShop: {
    locationName: 'bellevue',
    address: {
      street: '1st ave S',
      number: 11112,
      ste: 114,
      city: 'bellevue',
      state: 'wa'
    },
    daysOpen: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false
    },
    phone: '(183)583-1945',
    email: 'bellevue@salmoncookies.com',
    manager: 'roxy',
    employees: ['april', 'holly', 'max', 'harvey'],
    isOpen: function(day) {
      return this.daysOpen[day];
    },
    monthlyIncome: 30000,
    monthlyExpense: 11000,
    monthlyNet: function(){
      return this.monthlyIncome - this.monthlyExpense;
    }
  },
  kirklandShop: {
    locationName: 'kirkland',
    address: {
      street: '15th ave nw',
      number: 678,
      ste: 101,
      city: 'kirkland',
      state: 'wa'
    },
    daysOpen: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false
    },
    phone: '(483)294-1234',
    email: 'kirkland@salmoncookies.com',
    manager: 'joe',
    employees: ['grant', 'sophie', 'sally', 'art'],
    isOpen: function(day) {
      return this.daysOpen[day];
    },
    monthlyIncome: 30000,
    monthlyExpense: 15000,
    monthlyNet: function(){
      return this.monthlyIncome - this.monthlyExpense;
    }
  }
};
