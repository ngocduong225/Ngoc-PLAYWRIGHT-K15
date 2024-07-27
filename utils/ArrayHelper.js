const isEvenNumber = function (value, index, array) {
    return (value % 2 === 0);
}

//------
const isOddNumber = function (value, index, array) {
    return (value % 2 !== 0);
}

//------
// opt-out không lựa chọn
const convertToEvenNumbers = function (value, index, array) {
    if (isEvenNumber(value)) {
        return value;
    } else {
        return (value + 1) ;
        // return ++value 
    }
}

//------
const sortNumberASC = function(firstValue, secondValue){
    // [1, 2, 3]
    // 1, 2 -> -1 (<=0) -> first < second -> do nothing
    return firstValue - secondValue;
}

//------
const sortNumberDESC = function(firstValue, secondValue){
    return secondValue - firstValue;
}


// Export
module.exports = { 
    teo : isEvenNumber, // đặt tên khi export ra
    ti : isOddNumber ,
    convertToEvenNumbers,
    sortNumberASC,
    sortNumberDESC 
};