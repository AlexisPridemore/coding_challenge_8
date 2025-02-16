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

// Task 4 Parameters and Arguments, Scenario: Car Rental Cost Calculation

function calculateRentalCost(days, carType, insurance = false) {
    let carRates = { "Economy": 40, "Standard": 60, "Luxury": 100 }; //establish prices per day
    let rentalCost = carRates[carType] * days;
    if (insurance) rentalCost += 20 * days;  //add insurance costs
    console.log(`Total Rental Cost: $${rentalCost}`);
};  //calculate rental costs

calculateRentalCost(3, "Economy", true);  //Test Data
calculateRentalCost(5, "Luxury", false);  //Test Data

// Task 5 Returning Values, Scenario: Loan Payment Calculation

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);  //add and calulate each variable
    return `Total Payment: $${totalPayment.toFixed(2)}`;
};  //calculate and return total loan payment

console.log(calculateLoanPayment(1000, 0.05, 2));  //Test Data
console.log(calculateLoanPayment(5000, 0.07, 3));  //Test Data

// Task 6 Higher-Order Functions, Scenario: Identifying Large Transactions

function filterLargeTransactions(transactions, filterFunction) {
    let largeTransactions = transactions.filter(filterFunction);  //filter large transactions
    console.log(`Large Transactions: ${largeTransactions}`);
};  //find transactions above $1000

let transactions = [200, 1500, 3200, 800, 2500];  //Declare array
filterLargeTransactions(transactions, amount => amount > 1000);  //Test Data