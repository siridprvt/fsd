// callback hell

// Simulating a series of asynchronous operations with callbacks
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}

function step5(callback) {
    setTimeout(() => {
        console.log("Step 5 completed");
        callback();
    }, 1000);
}

// Callback Hell: Nested callbacks
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5(() => {
                    console.log("All steps completed!");
                });
            });
        });
    });
});