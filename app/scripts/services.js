'use strict';

angular.module('FTDeals.services', ['FTDeals.config'])

/*
 * The CmsApi method for getting the deals data
 * exposes a promise which will be resolvable once
 * the data has been received from the API or
 * immediately if the data has been previously
 * received
 */
.service('CmsApi', function(config, $log, $q, $http) {
  var dataRequested = false;
  var deferred;

  this.refreshCmsData = function() {
    $log.debug('Calling the API to request deals');
    deferred = $q.defer();

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
