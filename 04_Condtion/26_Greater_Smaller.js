//Generating 2 random number between to compare them and get greater and smaller number between 0 to 100
var num1 = Math.round(Math.random() * 100 + 1);
var num2 = Math.round(Math.random() * 100 + 1);
console.log("The generator found " + num1 + " as num1 & The generator found " + num2 + " as num2");
if (num1 >= num2) {
    if (num1 > num2) {
        console.log("Num1 is greater than Num2")
    }
} else if (num1 <= num2) {
    if (num1 < num2) {
        console.log("Num1 is smaller than Num2");
    }
} else {
    console.log("The both number is same");
}