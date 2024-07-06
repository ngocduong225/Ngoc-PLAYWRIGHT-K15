// Sort an integer array from min to max
// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

let intArr = [12, 34, 1, 16, 28];

for (let i = 0; i < intArr.length - 1; i++) {
    for (let j = 0; j < intArr.length - 1; j++) {
        if (intArr[j] > intArr[j + 1]) {
            // Hoán đổi các phần tử
            let temp = intArr[j];
            intArr[j] = intArr[j + 1];
            intArr[j + 1] = temp;
        }
    }
}

console.log(intArr);
