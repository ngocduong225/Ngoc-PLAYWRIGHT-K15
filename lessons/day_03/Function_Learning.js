// Function (Huong ngoai), method (huong noi)
// DRY: Dont repeat yourself
// Single Reponsibility: Tính đơn nhiệm
// Function name (thường bắt đầu bằng động từ)
// camelCase
// PascalCase


// Declaration Method 01: Function Declaration | Hoisting
let returnedValue = functionName();
console.log(returnedValue);

function functionName() {
    return 1;
}
// Declaration Method 02: Function Expression | Not Hoisting
const addNumber = function (firstNum, secondNum){
    return firstNum + secondNum;
}
addNumber(1, 2); 