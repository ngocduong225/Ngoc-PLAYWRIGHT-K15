const readline = require('readline-sync');
/**
 * ===Game menu=====
 * 1. Generate a random number (1->10)
 * 0. Exit!
 */
let isPlaying = true;
while (isPlaying) {
    printGameMenu();
    let userOption = getUserOption();

    if (userOption == 0) {
        isPlaying = false;
    } else if (userOption == 1) {
        // Generate random number
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Lucky number: ${randomNumber}`);
    } else {
        console.log("Nhap lui roi Teo oi")
    }
}
console.log("See you next time");

//--
function printGameMenu() {
    console.log("\t===Game menu=====");
    console.log("1. Generate a random number (1->10)");
    console.log("0. Exit!");
}

//--
function getUserOption() {
    return readline.question("Please select another question: ");
}
