let teo = {
    name: "Teo",
    myAge: 18,
    bankAccount : {
        accountNum: 123
    }
};
let tun = {
    name: "Tun",
    myAge: 20
};

// Shallow copy using spread syntax
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];

// let merge = [...arr1, ...arr2];
// console.log(merge);

// let ti = {...teo};
// ti.name = "ti";
// ti.myAge = 20;

// console.log(teo);
// console.log(ti);

//Shallow copy - deeper
let ti = JSON.parse(JSON.stringify(teo));
ti.bankAccount.accountNum = 234;

console.log(teo);
console.log(ti);

// developer. mozilla..
console.log((Object.keys(teo)));
console.log((Object.values(teo)));
console.log((Object.entries(teo)));