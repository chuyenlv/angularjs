'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
  templateUrl: 'phone-detail/templates/phoneDetail.html',
  controller: ['$routeParams', 'Phone',
    function PhoneListController($routeParams, Phone) {
      this.phone = Phone.get({phoneId: $routeParams.phoneId});
    }
  ]
});
