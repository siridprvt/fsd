// modules

// math.js

// Named export for addition function
export function add(a, b) {
    return a + b;
}

// Named export for subtraction function
export function subtract(a, b) {
    return a - b;
}

// Default export for a multiply function
export default function multiply(a, b) {
    return a * b;
}

// app.js

// Importing named exports
import { add, subtract } from './math.js';

// Importing default export
import multiply from './math.js';

// Using the imported functions
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 3)); // 12