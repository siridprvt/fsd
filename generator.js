// generator
function* countDown(start) {
    while (start >= 0) {
        yield start;
        start--;
    }
}

const countdown = countDown(3);

console.log(countdown.next()); // { value: 3, done: false }
console.log(countdown.next()); // { value: 2, done: false }
console.log(countdown.next()); // { value: 1, done: false }
console.log(countdown.next()); // { value: 0, done: false }
console.log(countdown.next()); // { value: undefined, done: true }