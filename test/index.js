var should = require('chai').should(),
    rpiTemp = require('../index'),
    getTemperature = rpiTemp.getTemperature;

describe('#getTemperature', function() {
    it('getting temperature should not fail', function() {
        getTemperature("28-000004e23e98", function(value) {
            var temperature = parseInt(value);
            expect(temperature).to.be.above(0);
        });
    });
});
