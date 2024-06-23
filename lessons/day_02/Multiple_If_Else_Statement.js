const read_line = require('readline-sync');

let user_age = Number(read_line.question('Your age: '));
if (user_age < 18){
    console.log(`NO SELL!`);
} else if (user_age <= 50){
    console.log(`UNLIMITEDUNLIMITED TO SELL!`);
} else {
    console.log(`2 cans of beer`);
}

/*
* && -> and
* true && true -> true
* true && false -> false
* false && false -> false
* false && true -> false
*
* || -> or
* true || true -> true
* true || false -> true
* false || false -> false
* false || true -> true
*/