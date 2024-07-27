//break, continue
// break thi gap 1 dieu kien dung thi dung luon
// continue la bo qua cai dieu kien trong vong lap nhung van tiep tuc vong lap

const targetNum = 3;
const array = [1, 2, 3, 4, 5];
let targetNumIndex;

// for (index = 0; index < 5; index++) {
//     if (array[index] === targetNum) {
//         targetNumIndex = index;
//         break;
//     }
// }
// console.log(`targetNumIndex: ${targetNumIndex}`);


//-------------
// for (index = 0; index < 5; index++) {
    //     if (isEvenNumber(array[index])) {
        //         continue;
        //     } else {
//         array[index] = array[index] + 1;
//     }
//     console.log(array[index]);
// }
// console.log(`current array: ${array}`);


// function isEvenNumber(number) {
//     return number % 2 === 0;
// }

for (index = 0; index < array.length; index++) {
    printElement(array[index]);
}


function printElement(number){
    if(number === 3){
        return;// kh co gtri tra ve, thoat khoi ham, xong, hem lam gi het
    }
    console.log(number);

}