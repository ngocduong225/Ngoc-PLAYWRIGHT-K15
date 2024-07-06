// CRUD: Create Read Update Delete

/**
 *  Literal Declaration: Khai báo theo kiểu tường minh
 *  index: start from 0
 *  length
 * 
 * 
 *  */

let myNumArray = [1, 2, 3, 4, 5];
//let arrayLength = myNumArray.length;
console.log(`Array's length: ${myNumArray.length}`);
//console.log(`Array's value at index 3: ${myNumArray.length[3]}`);

for (let index = 0;index < myNumArray.length; index++){
    console.log(`Array's value at index ${index}: ${myNumArray[index]}`);
}
for (let index = myNumArray.length-1; index >= 0; index--){
    console.log(`Array's value at index ${index}: ${myNumArray[index]}`);
}
//convert all elements into even numbers
for (let index = 0;index < myNumArray.length; index++){
    myNumArray[index] = myNumArray[index] * 2;
    console.log(`Array's value at index ${index}: ${myNumArray[index]}`);
}
console.log(myNumArray);

// undefine holes
myNumArray[10] = 100;
myNumArray.pop();
myNumArray.push(2000);

// Via Array's constructor