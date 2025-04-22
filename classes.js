// classes

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Subclass
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`${this.name} meows.Meow~!`);
    }
}

// Usage
const cat1 = new Cat('Whiskers', 'White');
cat1.speak(); // Whiskers makes a sound.
cat1.meow();  // Whiskers meows. Meow~!