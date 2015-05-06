'use strict';

angular.module('FTDeals.controllers.menu', ['FTDeals.services'])

.controller('MenuCtrl', function($scope, $log, CmsApi) {

  // Access the data promise from the CMS
  // service and set the number of deals
  // once it has been realised
  CmsApi.getCachedCmsData()
  .then(function(data) {
    $scope.numberOfDeals = data.list.length;
  }, function(err) {
    $scope.numberOfDeals = 0;
    $log.error('Failed to set number of deals in Menu Controller: ' + err);
  });
});
