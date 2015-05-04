'use strict';

angular.module('FTDeals.controllers', ['FTDeals.services', 'FTDeals.filters'])

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
})

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
})

.controller('DealCtrl', function($scope, $location, $log, $sce, CmsApi) {
  $log.info('Deal page: ' + $location.path());
  var dealId = $location.path().split('/').reverse()[0];

  CmsApi.getCachedCmsData()
  .then(function(data) {
    $scope.deal = data.list.filter(function(node) {
      return node.nid === dealId;
    })[0];

    $scope.dealHtmlContent = $scope.deal.body.value;
    $scope.deal.imgUrl = 'http://api.freedomtravel.ie/sites/default/files/field/image/Explosion.jpg';
  }, function(err) {
    $log.error('Couldnt get deal: ' + err);
  });
})

.controller('NewCommentCtrl', function() {
});
