//import from keyboard
const read_line = require('readline-sync');
/*
let my_name = read_line.question('Your name: ');
let my_age = read_line.question('Your age: ');
console.log(`${my_name}, ${my_age}`);

let next_year_age = Number(my_age) + 1;
console.log(`Next year age: ${next_year_age}`);
*/
let arrival_time = read_line.question('What time does she arrive?: ');
//===-> ss định dạng và gtri
let is_she_ontime = (arrival_time == 7);
//Comparison operator: >, <, >=, <=, ==, ===, !=, !==
if (is_she_ontime){
    console.log(`Let's talk!`);
} else {
    console.log(`End game.`);
}

// !true = false
if (!is_she_ontime){
    console.log(`End game.`);
} else {
    console.log(`Let's talk!`);
}

//Ternary operator: Toán tử 3 ngôi -> đơn giản hóa single If-else trong 1 vài case
let msg = is_she_ontime ?  `Let's talk!` : `End game.`;
console.log(msg);

