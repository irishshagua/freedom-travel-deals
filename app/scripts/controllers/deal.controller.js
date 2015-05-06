'use strict';

angular.module('FTDeals.controllers.deal', ['FTDeals.services'])

.controller('DealCtrl', function($scope, $location, $log, $sce, CmsApi) {
  $log.info('Deal page: ' + $location.path());
  var dealId = $location.path().split('/').reverse()[0];

  CmsApi.getCachedCmsData()
  .then(function(data) {
    $scope.deal = data.list.filter(function(node) {
      return node.nid === dealId;
    })[0];

    $scope.dealHtmlContent = $scope.deal.body.value;

    CmsApi.getImageUrlForFile($scope.deal.field_image.file.uri)
    .then(function(imgSrc) {
      $scope.deal.imgUrl = imgSrc;
    }, function(err) {
      $log.error('Couldnt get img src: ' + err);
    });
    
  }, function(err) {
    $log.error('Couldnt get deal: ' + err);
  });
});
