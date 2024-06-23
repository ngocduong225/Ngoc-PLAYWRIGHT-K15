// Allow user to input a number, print out it’s an odd or even number
const read_line = require('readline-sync');

let num = Number(read_line.question('Enter a number: '));

//check type of number
if (!Number.isInteger(num)){
    console.log(`Please enter an integer number!`);
} else {
// check odd/even number
    if(num % 2 == 0){
        console.log(`It's an even number!`);
    } else if (num % 2 !== 0){
        console.log(`It's an odd number!`);
    } else {
        console.log(`An error occurred while checking the number ${num}.`);
    }
}