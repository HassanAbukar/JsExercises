// write do..while loop that asks the user to enter the number greater than 10 and and repeats until they do so

let number;

do{
    number = parseInt(prompt("Enter number greater than 10:"));

}while(number <=10);

console.log(`You entered: ${number}`)