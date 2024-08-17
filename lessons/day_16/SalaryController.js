// Data Model processing - FP
class SalaryController {
    //FP
    getTotalSalary(employeeList) {
        // let totalSalary = 0;
        // employeeList.forEach(function(employee) {
        //     totalSalary += employee.salary;
        // });

        const totalSalary = employeeList.reduce(
            (totalSalary, employee) => totalSalary + employee.salary,
            0,
        );
        return totalSalary;
    }
}

module.exports = SalaryController;