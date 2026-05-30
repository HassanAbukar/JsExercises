// 1. Use the spread operator to combine two arrays [1,2,3] and [4,5,6] into single array
// 2. create funtion multiply that takes any number of arguement and returns their product using the rest parameter


// Exercise 1. Spread operator

const arrays = [1,2,3];
const Allarrays = [...arrays, 4,5,6];

console.log(Allarrays) // natiijo: [1,2,3,4,5,6]

// Exercise 2. Rest operator

function multiply(...numbers){

    return numbers.reduce((total, num ) => total * num, 1);
}

console.log(multiply(20,34,35)) // natiijo:23800  