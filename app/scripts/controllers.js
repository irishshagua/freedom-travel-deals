'use strict';

angular.module('FTDeals.controllers', ['FTDeals.services'])

.controller('MenuCtrl', function($scope, CmsApi) {
  $scope.numberOfDeals = CmsApi.getCachedCmsData().deals.length;
})

.controller('DealsCtrl', function($scope, CmsApi) {
  $scope.deals = CmsApi.getCachedCmsData().deals;
})

.controller('DealCtrl', function($scope) {
})

.controller('NewCommentCtrl', function($scope) {
});
