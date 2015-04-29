'use strict';

angular.module('FTDeals.services', ['FTDeals.config'])

.service('CmsApi', function(config, $log) {
  $log.log('CmsApi instantiated');
  var cmsData = {};
  var cmsDataLoaded = false;

  this.refreshCmsData = function() {
      $log.info('Refreshing cached CMS data from ' + config.cms.host + '/' + config.cms.path);

      cmsData.deals = [
        { title: 'Costa Rica', id: 1 },
        { title: 'Brazil', id: 2 },
        { title: 'China', id: 3 },
        { title: 'Uruguay', id: 4 }
      ];

      cmsDataLoaded = true;
  };

  this.getCachedCmsData = function() {
    if (!cmsDataLoaded || cmsData.deals === undefined || cmsData.deals.length === 0) {
        this.refreshCmsData();
    }

    return cmsData;
  };
});
