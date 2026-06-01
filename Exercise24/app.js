<<<<<<< HEAD
// Use object destructuring to extract the make and the model properties 
// from the object {make:"Tayota", model : "Corrola", year : 2020}

const Car = {make:"Tayota", model : "Corrola", year : 2020};

const [first, second , third] = Car

console.log(first) // red
console.log(third) // blue
=======
// create function CalculateArea that takes width and height as parameter and returns the area.
// if no height is provided, it should default to width (calculating the area of the square)

function calculateArea(width, height = width) {
    return width * height;
}

// Rectangle (width iyo height labadaba la siiyay)
console.log(calculateArea(20, 5))  // 100  
// Square (height la siin — default = width)
console.log(calculateArea(10))      // 100 
>>>>>>> d237eb6c50add6b75b23002430472c8b8598c998
