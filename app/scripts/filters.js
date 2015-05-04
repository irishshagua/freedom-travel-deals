'use strict';

angular.module('FTDeals.filters', [])

/**
 * Convert the time stamp from
 * the deals api to to a JS Date
 * object
 */
.filter('asDate', function() {
  return function(input) {
    var d = new Date(0);
    d.setUTCSeconds(input);

    return d;
  };
});
