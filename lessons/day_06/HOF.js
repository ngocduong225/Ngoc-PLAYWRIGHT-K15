
function sayHello(name){
    console.log(`Hello ${name}!`);
}
function sayHelloNewStyle(name, age){
    const withoutAgeQuestion = `How is going ${name}`
    const withAgeQuestion = `How is going ${name}? seems you are ${age} years old!`
    if (age) {
        console.log(withAgeQuestion);
    } else {
        console.log(withoutAgeQuestion);
    }
    
}
//Higher order function
function functionCaller(callBackFunction, name, age){
    callBackFunction(name, age);
}

function callApi(apiUrl, formatData) {
    try {
    // Get data from api example.com
    // Got data
    formatData();
    } catch (e) {
        console.log('Error', e);
    }
}

// Middleware
// Receive user request -> Log User input -> validate -> Process -> Return result

[receiveRequest, logInput, validate, process, returnResult];
function receiveRequest(next) {
    
    // Original
    // valiate -> logInput

    // validate something 
    next();
}

functionCaller(sayHello, `Teo`, 18);
functionCaller(sayHelloNewStyle, `Teo`, 18);