rpi-temp-module
=========

Node module for fetching data from the DS18B20 temperature sensor on Raspberry Pi. For real world usage see the [Raspberry Pi thermometer project](https://github.com/igorkulman/rpi-thermometer).

## Raspberry Pi setup

First, load the drivers

```bash
sudo modprobe w1-gpio  
sudo modprobe w1-therm
```

then determine the device id of your sensor (28-000004e23e98 in my case) 

```bash
ls /sys/bus/w1/devices/   
```

You will need to provide the device id as a parameter when using the module.

## Installation

```bash
npm install rpi-temp-module --save
```

## Usage

```javascript
var rpiTemp = require('rpi-temp-module');

rpiTemp.getTemperature("28-000004e23e98", funciton(value) {    
    console.log("Temperature: "+value+"C");    
});    
```

## Tests

```bash
npm test
```
