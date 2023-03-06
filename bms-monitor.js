const {expect} = require('chai');
const language = require('./changeLanguage');
const { celciusTemp } = require('./celciusTemp');


function batteryIsOk(temperature, soc, charge_rate,tempUnit) {


    temperature = celciusTemp(temperature,tempUnit);
    const values = [
        {name:"temperature", input:temperature, min:0, max:45},
        {name:"stateOfCharge", input:soc, min:20, max:80},
        {name:"chargeRate", input:charge_rate, min:0, max:0.8}
    ];
    let isbatteryOk = values.every((item)=>{
        if (item.input < item.min || item.input > item.max){
         return false;
        }
        else{
         return true;
        }
     })



   return isbatteryOk;
}

module.exports = {batteryIsOk};
