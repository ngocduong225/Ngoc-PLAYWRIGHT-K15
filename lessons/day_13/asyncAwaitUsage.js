run();

async function run() {
    const returned1 = await asyncFunc01('param1');
    const returned2 = await asyncFunc02(returned1);
    const returned3 = await asyncFunc03(returned2);
    console.log(returned3);
    
}

function asyncFunc01(param1) {
    console.log(`Processing param: ${param1}`);
    // Wrap asynchronous func into promise
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunc01: ' + param1;
            resolve(returnedValue);
        }, 1000);
    });
}

function asyncFunc02(param2) {
    console.log(`Processing param: ${param2}`);
    // Wrap asynchronous func into promise
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunc01: ' + param2;
            resolve(returnedValue);
        }, 2000);
    });
}

function asyncFunc03(param3) {
    console.log(`Processing param: ${param3}`);
    // Wrap asynchronous func into promise
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunc01: ' + param3;
            resolve(returnedValue);
        }, 2000);
    });
}