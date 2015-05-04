'use strict';

describe('asDate filter', function(){

  var $filter;

  beforeEach(function () {
    module('FTDeals');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should convert epoch time to a Date object', function() {
    var sampleEpochTime = 1429649887;
    var result = $filter('asDate')(sampleEpochTime);

    assert.typeOf(result, 'Date');
  });

  it('should create a date with the passed value', function() {
    var sampleEpochTime = 1429649887;
    var result = $filter('asDate')(sampleEpochTime);

    assert.equal(result.getTime(), sampleEpochTime * 1000);
  });
});
