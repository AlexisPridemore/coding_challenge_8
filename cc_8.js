// Task 1 Function Declaration, Scenario: Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    return `Net Salary: $${netSalary.toFixed(2)}`;
};  //calculate net salary

console.log(calculateSalary(5000, 500, 0.1));     //Test Data
console.log(calculateSalary(7000, 1000, 0.15));   //Test Data