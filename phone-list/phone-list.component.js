'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/templates/phoneList.html',
  controller: ['Phone',
    function PhoneListController(Phone) {
      this.phones = Phone.query();
      this.orderProp = 'created';
    }
  ]
});

