/**
 * Two sum
 * [3, 7, 22, 1], target number: 8 -> [jndex1, index2] -> [1,3]
 * Assumptions: Only one indice existing
 */
const givenArray = [3, 7, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber);
console.log(indices);

//On^2
function findIndicesUsingNestedLoop(givenArray, targetNumber) {
    // Brute force
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        for (let secondNumberIndex = firstNumIndex + 1; secondNumberIndex < givenArray.length; secondNumberIndex++) {
            const secondNum = givenArray[secondNumberIndex];
            if (secondNum === targetNumber - firstNum) {
                return [firstNumIndex, secondNumberIndex];
            }
        }
    }
    return [];
}

//On
function findIndicesUsingMap(givenArray, targetNumber){
    let numMap = new Map();
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        const lookingNum = targetNumber - firstNum;
        if(numMap.has(lookingNum)){
            return [numMap.get(lookingNum), firstNumIndex];
        }
        numMap.set(firstNum, firstNumIndex);
    }
    return [];
}
    /**
     * loop index 0 -> length -1
     * firstNum
     * LookingNumber = targetNum - firstNum
     * if(map.has(lookingNumber))
     *  return [map.get(lookingNumber), firstNumIndex]
     * map.set(firstNum, firstNumIndex)
     * ----chạy thử------
     * firstNum = 3
     * lookingNum = 8 - 3 -> 5
     * 
     */
