'use strict';

angular.module('FTDeals.filters', [])

.filter('asDate', function() {
  return function(input) {
    var d = new Date(0);
    d.setUTCSeconds(input);

    return d;
  };
});
