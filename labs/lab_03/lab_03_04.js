// Merge 2 SORTED integer array into one SORTED array
// Array 01: [1, 12, 16, 28, 34]
// Array 02: [1, 13, 16, 27, 99]
// Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

let array1 = [1, 12, 16, 28, 34]
let array2 = [1, 13, 16, 27, 99]
let mergedArray = [];
let i = 0;
let j = 0;

for (; i < array1.length && j < array2.length;) {
    if (array1[i] < array2[j]) {
        mergedArray.push(array1[i]);
        i++;
    } else {
        mergedArray.push(array2[j]);
        j++;
    }
}

// Thêm các phần tử còn lại của mảng 1 vào mergedArray
for (; i < array1.length; i++) {
    mergedArray.push(array1[i]);
}

// Thêm các phần tử còn lại của mảng 2 vào mergedArray
for (; j < array2.length; j++) {
    mergedArray.push(array2[j]);
}

console.log(mergedArray);

