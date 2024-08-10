console.log('1. Chay toi nha thang Teo');
// Asynchronous
setTimeout(callbackFunc.bind(null, 'Teo'), 1000); // 1000ms = 1s
console.log('3. Chay toi quan cafe');


function callbackFunc(name){
    console.log(`2. ${name} oi, un cafe hem?`);
}

//Event Emitter > DOC THEM 