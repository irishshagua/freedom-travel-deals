angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('DealsCtrl', function($scope) {
  $scope.deals = [
    { title: 'Spain', id: 1 },
    { title: 'Greece', id: 2 },
    { title: 'France', id: 3 }
  ];
})

.controller('DealCtrl', function($scope) {
})

.controller('NewCommentCtrl', function($scope) {
});
