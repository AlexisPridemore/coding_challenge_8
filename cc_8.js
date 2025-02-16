// Task 1 Function Declaration, Scenario: Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    return `Net Salary: $${netSalary.toFixed(2)}`;
};  //calculate net salary

console.log(calculateSalary(5000, 500, 0.1));     //Test Data
console.log(calculateSalary(7000, 1000, 0.15));   //Test Data

// Task 2 Function Expression, Scenario: Product Price After Discount

const calculateDiscount =function(price, discountRate) {   //add discount
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}; //calculate final price

console.log(calculateDiscount(100, 0.2));   //Test Data
console.log(calculateDiscount(250, 0.15));  //Test Data

// Task 3 Arrow Function, Scenario: Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => {  //function that applies a fee
    let serviceFee = 0;
    if (serviceType === "Premium") serviceFee = amount * 0.15;       //Premium fee
    else if (serviceType === "Standard") serviceFee = amount * 0.10;  //Standard fee
    else if (serviceType === "Basic") serviceFee = amount * 0.05;     //Basic fee
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`);
}; //calculate service fee

calculateServiceFee(200, "Premium");   //Test Data
calculateServiceFee(500, "Standard");  //Test Data


