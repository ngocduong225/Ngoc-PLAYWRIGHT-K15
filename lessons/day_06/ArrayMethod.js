const {
    teo,
    convertToEvenNumbers,
    sortNumberASC,
    sortNumberDESC,
    } = require('../../utils/ArrayHelper');

// Filter
let myArray = [1, 2, 3, 4, 5];
let evenNumber = myArray.filter(teo);

// Map
let toEvenNumbers = myArray.map(convertToEvenNumbers)

// Sort - String
let myStrings = ['B', 'C', 'A'];
myStrings.sort(); // sort theo bảng chữ cái abcd..z
myStrings.reverse(); // ngược lại zyx..cba
// sort luôn luôn chuyển sang string

// Sort - Number
let otherNumArray = [100, 22, 19];
otherNumArray.sort(sortNumberASC);
console.log(otherNumArray);
otherNumArray.sort(sortNumberDESC);
console.log(otherNumArray);

let mixedContent = [`aa`, `aA`, `a1`, `1`]
console.log(mixedContent.sort());

// console.log(evenNumber);
// console.log(toEvenNumbers);
// console.log(myStrings); 