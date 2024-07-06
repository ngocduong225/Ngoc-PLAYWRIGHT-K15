// import ... from
// export function() {...}

// CommonJS Module System

// ES6 module system

// Declaration

const getWeight = function(yourCurrentBMI, standartBMI, height){
    const weight = (height **2) * (yourCurrentBMI - standartBMI);
    return Math.abs(weight);
}
const sayHello = function(){
    console.log("Hello")
}

// Export
module.exports = {getWeight,sayHello};

// Import
//const UtilMethods = require(../UtilMethods);
// Destructure
const{getWeight,sayHello} = require('UtilMethods'); 