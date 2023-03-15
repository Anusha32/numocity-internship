const {assert} = require('chai');

describe('Test case for hello world', function() {
  

  it('All parameters at maximum value', function() {
    assert.equal(batteryIsOk(45, 80, 0.8, 'Celcius'), true);
  });
});
