// Create function calculateArea that takes width and height as  parameters and returns the area.
//  if no height is provided, it should default to width (for calculating the area of the width)

function calculateArea(width, height = width){

    return width * height;
}

// with height
console.log(calculateArea(10,20)) // 200

// with no height
console.log(calculateArea(10)) // 20