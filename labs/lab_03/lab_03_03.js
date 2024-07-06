// Sort an integer array from min to max
// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

let intArr = [12, 34, 1, 16, 28];

for (let i = 0; i < intArr.length - 1; i++) {
    for (let j = 0; j < intArr.length - 1 - i; j++) {
        if (intArr[j] > intArr[j + 1]) {
            // Swap elements
            let temp = intArr[j];
            intArr[j] = intArr[j + 1];
            intArr[j + 1] = temp;
        }
    }
}

console.log(intArr);
