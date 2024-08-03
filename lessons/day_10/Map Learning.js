// CRUD: Create Read Update Delete
console.log(Object.entries({ name: 'Teo', age: 18 }));

const emergencyList = new Map([
    // entry -> key : value
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
    
]);

//nếu 2 key trùng nhau thì khi lấy ra overwrite gtri trc, kh báo lỗi

// Read a single value from entry

console.log(emergencyList.get('113'));

// check if a key is existing
console.log(emergencyList.has('112'));

//get key
console.log("===========Loop the maps's entries via key");
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}

//get value
console.log("===========Loop the maps's entries via values");
for (const value of emergencyList.values()) {
    console.log(`Value: ${value}`);
}

// lấy ra dưới dạng array từ map
console.log(Array.from(emergencyList.keys()));
console.log(Array.from(emergencyList.values()));

// console.log(emergencyList);

// Update => set
// khi thêm key trùng, overwrite -> kh báo lỗi
emergencyList.set(112, 'SomethingElse');
console.log(emergencyList);

//Delete
console.log(`Size before: ${emergencyList.size}`);
emergencyList.delete('116');
console.log(emergencyList);
console.log(`Size after: ${emergencyList.size}`);