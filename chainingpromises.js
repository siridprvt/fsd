// chaining promises

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 1 completed");
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 2 completed");
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Step 3 completed");
        }, 1000);
    });
}

step1()
    .then((message) => {
        console.log(message); // Output: Step 1 completed
        return step2();       // Proceed to next step
    })
    .then((message) => {
        console.log(message); // Output: Step 2 completed
        return step3();       // Proceed to next step
    })
    .then((message) => {
        console.log(message); // Output: Step 3 completed
        console.log("All steps completed!");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
// OR
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // Output: ["Task 1 completed", "Task 2 completed", "Task 3 completed"]
    })
    .catch((error) => {
        console.error("Error:", error);
    });
// OR

let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 1 completed"));
let promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Task 2 completed"));

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result); // Output: "Task 2 completed" (since it resolves first)
    })
    .catch((error) => {
        console.error("Error:", error);
    });