/*
01) Even Number means which numbers are devisionable by 2 and it generates reminder of 0
02) Odd Number menas which number arn't devisionable by 2 and it generates always reminder of 1
*/

//Get a random number between 0 to 100
var getNum = Math.round(Math.random() * 100 + 1);
console.log("Random gerator class found " + getNum + " as number.")
if (getNum % 2 == 0) {
    console.log("This is a even number");
} else {
    console.log("This is a odd number");
}

//Get a random nuber between 0 to 10;
var getNum2 = Math.round(Math.random() * 10 + 1)
console.log("The number is: " + getNum2)
if (getNum2 % 2 == 0) {
    console.log("The number is Even")
} else if (getNum2 == 0) {
    console.log("The number is 0")
} else {
    console.log("The number is odd")
}