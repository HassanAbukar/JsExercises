// Create a function that returns a Promise, which resolves after a 2-second delay
// with a success message. Handle the Promise using .then() and .catch()

function delayedMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // You can change this to false to simulate a failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}

delayedMessage()
    .then(message => console.log(message))
    .catch(error => console.error(error));
