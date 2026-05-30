// create function CalculateArea that takes width and height as parameter and returns the area.
// if no height is provided, it should default to width (calculating the area of the square)

function calculateArea(width, height = width) {
    return width * height;
}

// Rectangle (width iyo height labadaba la siiyay)
console.log(calculateArea(20, 5))  // 100  
// Square (height la siin — default = width)
console.log(calculateArea(10))      // 100 
