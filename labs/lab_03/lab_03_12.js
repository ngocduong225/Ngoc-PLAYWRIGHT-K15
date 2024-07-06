let intArr = [1, 2, 3, 4, 5];

// Lab 3.1
//Count how many odd, even number(s) in an integer array
let evenCount = 0;
let oddCount = 0;
for(let i = 0; i < intArr.length; i++){
    if (intArr[i] % 2 == 0){
        evenCount++;
    } else oddCount++;
}
console.log(`Even numders: ${evenCount}`);
console.log(`Odd numbers:: ${oddCount}`);


//Lab 3.2:
//Finding maximum value/minimum value from an integer array
let minValue = intArr[0];
let maxValue = intArr[0];
for(let i = 1; i < intArr.length; i++){
    //min
    if (intArr[i] < minValue){
        minValue = intArr[i];
    }
    //max
    if (intArr[i] > maxValue){
        maxValue = intArr[i];
    }
}
console.log(`Minimum: ${minValue}`);
console.log(`Maximum: ${maxValue}`);
