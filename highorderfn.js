// high order fun

// Higher-order function that accepts a function as an argument
function applyOperation(arr, operation) {
    return arr.map(operation); // Apply the operation to each element in the array
}

const numbers = [1, 2, 3, 4, 5];

// Operation: Doubling each number
const doubled = applyOperation(numbers, function (num) {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]