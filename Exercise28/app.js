
// Rewrite the function using async/await instead of .then() and .catch()

function delayedMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Change to false to simulate failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}

async function fetchData() {
    try {
        const message = await delayedMessage();
        console.log(message); // "Data fetched successfully!" — 2 sec kadib
    } catch (error) {
        console.error(error); // "Failed to fetch data."
    }
}

fetchData();
console.log("Fetching data...") // Isla markiiba print garaa