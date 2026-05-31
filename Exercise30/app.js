
// Callback Functions - multiply and divide

function operate(a, b, callback) {
    return callback(a, b);
}

// Multiply
function multiply(a, b) {
    return a * b;
}

// Divide
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// Results
console.log(operate(10, 5, multiply)); // 50
console.log(operate(20, 4, divide));   // 5
console.log(operate(10, 0, divide));   // Error: Cannot divide by zero!