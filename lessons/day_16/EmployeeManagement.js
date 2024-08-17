// Create Data, call controller to process data
const Employee = require("./Employee");
const SalaryController = require("./SalaryController");
// user-defined data - Model
let teo = new Employee(10000);
let ti = new Employee(10000);

// Init controller
let salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);


// primitive
// let a = 1;

// if(a <2 ){
//     console.log("less than 2");
// }
/**
 * 1. Hard to limit the access into properties- > hard to control encapsulation
 * 2. Can't control type of object -> run time : hard to debut
 */