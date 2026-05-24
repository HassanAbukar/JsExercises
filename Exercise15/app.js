const people = [
    {  name : "Abdirahman Ali", age : 23, city : "garoowe"},
    {  name : "Mohamed Hassan", age : 28, city : "Muqdisho"},
    {  name : "Cali Abukar", age : 21, city : "Muqdisho"}   
]


console.log("Properties and Value of each person")

for (let person of people) {
    for (let key in person) {
        console.log(` ${key}: ${person[key]}`)
    }
    console.log("___________")
}