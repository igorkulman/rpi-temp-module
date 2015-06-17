var exec = require("child_process").exec;

module.exports = {
    getTemperature: function(deviceId, callback) {
        var child = exec("cat /sys/bus/w1/devices/" + deviceId + "/w1_slave", function (error, stdout, stderr) {
            var tempData = stdout.toString().split('\n')[1];
            var temp = parseInt(tempData.split("=")[1]) / 1000;
            callback(temp);
        });
    }
}


