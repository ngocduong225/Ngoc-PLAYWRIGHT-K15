// CRUD: Create Read Update Delete

/**
 *  Literal Declaration
 *  index: start from 0
 *  length
 * 
 * 
 *  */

let myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Delete | splice
myNumArray.splice(0,2);
//myNumArray.splice(0) -> xoa het cac phan tu
//myNumArray.splice(2,1) -> xóa từ 2, 1 phần tử

console.log(myNumArray);

// Delete number at index where index is an even number
// but do not delete the number at index zero
