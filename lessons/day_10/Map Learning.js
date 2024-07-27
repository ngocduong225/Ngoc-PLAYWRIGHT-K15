// CRUD: Create Read Update Delete
console.log(Object.entries({ name: 'Teo', age: 18 }));

const emergencyList = new Map([
    // entry
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
    
]);
// Read a single value from entry

console.log(emergencyList.get('113'));

// check if a key is existing
console.log(emergencyList.has('13'));

console.log("===========Loop the maps's entries via key");
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}

console.log("===========Loop the maps's entries via values");
for (const value of emergencyList.values()) {
    console.log(`Value: ${value}`);
}
console.log(Array.from(emergencyList.keys()));
console.log(Array.from(emergencyList.values()));

// console.log(emergencyList);

// Update => set
// khi them vao 1 key khong ton tai thi khong lou
emergencyList.set(112, 'SomethingElse');
console.log(emergencyList);

//Delete
console.log(`Size before: ${emergencyList.size}`);
emergencyList.delete('116');
console.log(emergencyList);
console.log(`Size after: ${emergencyList.size}`);