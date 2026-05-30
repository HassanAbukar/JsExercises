// Use the reduce() method to multiply all the numbers in the array [1,2,3,4,5]

const numbers  = [1,2,3,4,5]

const result = numbers.reduce((total, num) => total * num, 1)
console.log(result);// Natiijo : 120
