var num1 = Math.round(Math.random() * 100 + 1);
var num2 = Math.round(Math.random() * 100 + 1);
var num3 = Math.round(Math.random() * 100 + 1);
var num4 = Math.round(Math.random() * 100 + 1);
if (num1 >= num2 || num3 <= num4) {
    if (num1 >= num2) {
        console.log("1st Condition is true.")
    } else {
        console.log("2nd Condtion is true")
    }
} else {
    console.log("One condition might be true or both are false")
}