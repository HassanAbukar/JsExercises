// Use object destructuring to extract the make and the model properties 
// from the object {make:"Tayota", model : "Corrola", year : 2020}

const Car = {make:"Tayota", model : "Corrola", year : 2020};

const [first, second , third] = Car

console.log(first) // red
console.log(third) // blue