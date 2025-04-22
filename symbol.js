// Symbols

const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false (Symbols are always unique, even if they have the same description)


const mySymbol = Symbol('id');
const myObject = {
    name: 'John',
    [mySymbol]: 1234 // Using Symbol as the key
};

console.log(myObject[mySymbol]); // 1234