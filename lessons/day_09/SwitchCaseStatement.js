const readline = require('readline-sync');
let userNum = getUserNumber();

// if (userNum == 2) {
//     console.log("Monday");
// }
// else if (userNum == 3) {
//     console.log("Tuesday");
// }
// else if (userNum == 4) {
//     console.log("Wednesday");

// }
// else if (userNum == 5) {
//     console.log("Thursday");

// }
// else if (userNum == 6) {
//     console.log("Friday");

// }
// else if (userNum == 7) {
//     console.log("Weekend");

// } else {
//     console.log("Nhap lui roi Teo oi!! 2-8");
// }
switch (userNum) {
    case "2":
        console.log("Monday!");
        break;
    case "3":
        console.log("Tuesday!");
        break;
    case "4":
        console.log("Wednesday!");
        break;
    case "5":
        console.log("Thursday!");
        break;
    case "6":
        console.log("Friday!");
        break;
    case "7":
    case "8":
        console.log("Weekend!");
        break;
    default:
        console.log("Nhap lui roi Teo oi!! 2-8");
}
//---
function getUserNumber() {
    return readline.question("Please enter ur num: ");
}