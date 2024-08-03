let myString = "  Though I got a big laugh, big voice, and big personality. Would you guarantee?  ";
console.log(myString);

//Length
const strLength = myString.length;
console.log(myString.length);

//Get a character at a position
for(let index = 0; index < strLength; index++) {
   // console.log(myString.charAt(index));
}

// Get rid of spaces at start and end position
//"   something   "
//kh thay đổi chuỗi gốc
let trimStr = myString.trim();
console.log(trimStr.length);

//Replace
// hem có ALL thì replace từ đầu tiên
let targetString = "Ngmoc cMumtem, dem thmuonmg, tomt bumng"
let decodeString = targetString.replaceAll("m", "");
console.log(decodeString);

//Regex -> Regular Expression (String Regular Expression)
let decodedStrinWithReplace = targetString.replace(/m/gi, "");
//   /m/gi -> m thường hay M hoa đều replace hết
//  g - global -> m thường
//  i - insensitive
console.log(decodedStrinWithReplace);

// Total cooking time: 200mins (UI)
// DB -> docIdCooking Recipe -> {total: 200, factor: minute} (BE)
let uiString = "200mins";
let uiStringWithNum = uiString.replace(/[^0-9]/gi, "");
console.log(uiStringWithNum);

// backstick -> ` | string template
console.log(`${myString} sth else ${uiString}`);

// concat: concatenation -> nối chuỗi
// +
// .concat()
console.log('Hello, ' + 'Teo');
console.log('Hello, ' .concat('Teo Teo'));

// Substr -> cắt chuỗi
let strTobeCut = 'https://sdetpro.com';
// Inclusive
let startIndex = 0;
// Exclusive
let endIndex = 5;
let subStr = strTobeCut.substring(startIndex, endIndex);
console.log(subStr);
// only start -> lấy từ đó đến cuối chuỗi

// split -> cắt chuỗi -> output là array
console.log(strTobeCut.split('://'));
