/* write else-if statement that logs "Very Cold" if the temprature below 0,"Cold" if the temprature between 0 and 15
"warm" if the temprature between 15 and 25, "Hot" if the temprature above 25 */

const temprature = 10

if(temprature <0){

    console.log("Very Cold");
}else if(temprature >= 0 && temprature <= 15){

    console.log("Cold");

}else if(temprature >= 15 && temprature <= 25){

    console.log("Warm");

}else{

    console.log("Hot");
}