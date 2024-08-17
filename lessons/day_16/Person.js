// Template - Data model - user-defined data

class Person {
    /** thuộc tính - dùng Underscore
     * _name
     * _age
     */

    // Method
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
     // Setters
     set name(name){
        this._name = name;
    }
    // getter
    get name(){
        return this._name;
    }
}

// muốn tạo object -> constructor
// new -> call constructor to create an object from a class
let teo = new Person("Teo",18);
console.log(teo);//{}


// 1. Init property values when creating object -> constructor
// 2. Setter(s) - methods: Set value for properties 