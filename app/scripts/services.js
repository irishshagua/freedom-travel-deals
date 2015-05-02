'use strict';

angular.module('FTDeals.services', ['FTDeals.config'])

.service('CmsApi', function(config, $log, $q, $http) {
  var dataRequested = false;
  var deferred = $q.defer();

  this.refreshCmsData = function() {
    $http
      .get('http://' + config.cms.host + '/' + config.cms.path)
      .then(function(res) {
        deferred.resolve(res.data);
      }, function(err) {
        deferred.reject(JSON.stringify(err));
      });
  };

  this.getCachedCmsData = function() {
    if (!dataRequested) {
      dataRequested = true;
      this.refreshCmsData();
    }

    return deferred.promise;
  };
});
