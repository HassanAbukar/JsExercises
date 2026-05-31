// Simulate fetching JSON data from a file using a Promise and async/await

const fs = require('fs');

// Simulate fetch using fs.readFile (Non-Blocking)
function fetchJSONData() {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                reject("Error reading file: " + err);
            } else {
                resolve(data);
            }
        });
    });
}

async function getData() {
    try {
        console.log("Fetching data...");
        const jsonString = await fetchJSONData();
        const data = JSON.parse(jsonString);
        console.log("Data received:", data);
        console.log("Name:", data.name);
        console.log("City:", data.city);
    } catch (error) {
        console.error(error);
    }
}

getData();
console.log("Other code running while waiting...");