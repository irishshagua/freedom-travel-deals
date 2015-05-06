'use strict';

angular.module('FTDeals.controllers.deals', ['FTDeals.services'])

.controller('DealsCtrl', function($scope, $log, CmsApi) {
  $scope.refreshDeals = function() {
    $log.debug('Refresh deals requested');
    $scope.$broadcast('scroll.refreshComplete');
  };

  CmsApi.getCachedCmsData()
  .then(function(data) {
    $scope.deals = data.list;
  }, function(err) {
    $scope.numberOfDeals = 0;
    $log.error('Failed to get deals in Deals Controller: ' + err);
  });
});
