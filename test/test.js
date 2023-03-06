const {expect, assert} = require('chai');
const {batteryIsOk} = require('../bms-monitor');

describe("Test case to check battery", function(){
    it("Battery is good", function(){
        assert.equal(batteryIsOk(25,50,0.5,"Celcius"),true,"battery is okay");
    });
    it('Battery temperature is high', function () {
        assert.equal(batteryIsOk(47,60,0.6,"Celcius"),false,"battery temperature is not okay") 
    });
    it('Battery temperature is low', function () {
        assert.equal(batteryIsOk(-1,60,0.6,"Celcius"),false,"battery temperature is not okay") 
    });
    it('State of charge is low', function () {
        assert.equal(batteryIsOk(25,10,0.6,"Celcius"),false,"battery state is not okay") 
    });
    it('State of charge is high', function () {
        assert.equal(batteryIsOk(25,85,0.6,"Fahrenheit"),false,"battery state is not okay") 
    });
    it('Charge rate is low', function () {
        assert.equal(batteryIsOk(25,60,-0.1,"Fahrenheit"),false,"battery charge rate is not okay") 
    });
    it('Charge rate is high', function () {
        assert.equal(batteryIsOk(25,85,0.9,"Fahrenheit"),false,"battery is not okay") 
    });
    it('All parameters at minimum value', function() {
        assert.equal(batteryIsOk(0, 20, 0,"Celcius"), true);
    });
      
    it('All parameters at maximum value', function() {
        assert.equal(batteryIsOk(45, 80, 0.8,"Celcius"), true);
    });
});