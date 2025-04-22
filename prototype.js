// prototypal inheritance

// Constructor Function
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
};

// Dog constructor
function Dog(name, breed) {
    Animal.call(this, name); // call parent constructor
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(this.name + ' barks. Woof Woof!');
};

// Usage
const dog1 = new Dog('Rocky', 'Bulldog');
dog1.speak();  // Rocky makes a noise.
dog1.bark();   // Rocky barks. Woof Woof!