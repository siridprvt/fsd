// nodejs module

// rectangle.js
function calculateArea(length, width) {
    return length * width;
}

// Export the function
module.exports = calculateArea;
// or module.exports = { add, subtract };
// OR
exports.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
// app.js
const calculateArea = require('./rectangle');  // Import the custom module

const length = 5;
const width = 3;

console.log(`The area of the rectangle is: ${calculateArea(length, width)} square units.`);

//  4.ES6 Module System (Using import and export)
// 5. Using Class in Custom Module
// app.js
const Calculator = require('./calculator');  // Import the class

const calc = new Calculator();

console.log(calc.add(5, 3));        // 8
console.log(calc.subtract(10, 4));  // 6