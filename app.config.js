'use strict';

angular.module('phonecatApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones', {
    template: '<phone-list></phone-list>'
  });
  $routeProvider.when('/phones/:phoneId', {
    template: '<phone-detail></phone-detail>'
  });
  $routeProvider.otherwise({redirectTo: '/phones'});
}]);
