// CRUD
// Object literal: đối tượng tường minh

let teo = {
    name: "Teo",
    'my age': 18 
}

// Read: dot natation -> kh có khoảng trắng
//      [] syntax -> có khoảng trắng
// console.log(teo.name);
// console.log(teo["my age"]);

// let ti = function(){

// };
// console.log(ti.name);

// console.log(teo.name);
// console.log(teo["my age"]);

// // Update
// teo.name = "Ti";
// teo["my age"] = 20;
// console.log(teo);

// // Destruture: phân rã
// const{name, [" my age"]: age} = teo;
// console.log(name);
// console.log(age);

// // Delete
// delete teo.name;
console.log(teo);
printUserInfo(teo);
function printUserInfo({name,["my age"]: age}){
    console.log(name);
    console.log(age);
}