// Basic Function
function add(x, y) {
    return x + y;
}

console.log(add(20, 30)) // 50
console.log(add(10, 40)) // 50
console.log(add(24, 30)) // 54
console.log(add(20, 50)) // 70


// Function Expression
const addExpression = function(x, y) {
    return x + y;
}

console.log(addExpression(20, 30)) // 50
console.log(addExpression(10, 40)) // 50
console.log(addExpression(24, 30)) // 54
console.log(addExpression(20, 50)) // 70
