// closures

function createCounter() {
    let count = 0; // Private variable

    // Return an object with methods to interact with the private variable
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.getCount(); // 1 (Access the private count)