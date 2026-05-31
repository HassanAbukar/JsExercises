// GET request using fetch API

async function getUsers() {
    try {
        console.log("Fetching users...");
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const users = await response.json();
        
        console.log("Users fetched successfully!");
        console.log(users);
        
        // User kasta magaciisa iyo emailkiisa log gare
        users.forEach(user => {
            console.log(`Name: ${user.name} | Email: ${user.email}`)
        });
        
    } catch (error) {
        console.error("Error:", error);
    }
}

getUsers();
console.log("Other code running while waiting..."); // Isla markiiba print garaa