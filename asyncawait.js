// async/await

async function processSteps() {
    try {
        const step1 = await new Promise((resolve) => setTimeout(resolve, 1000, "Step 1 completed"));
        console.log(step1); // Output: Step 1 completed

        const step2 = await new Promise((resolve) => setTimeout(resolve, 2000, "Step 2 completed"));
        console.log(step2); // Output: Step 2 completed

        const step3 = await new Promise((resolve) => setTimeout(resolve, 1500, "Step 3 completed"));
        console.log(step3); // Output: Step 3 completed

        console.log("All steps completed!");
    } catch (error) {
        console.error("Error:", error);
    }
}

processSteps();