/*
01) This is a marksheet making code
02) Generating 6 random number between 0 to 100
03) Add the 6 numbers
04) Make some condition for getting grade
05) Print total number
06) Print grade
07) Print a message or feedback about result
*/
var num1 = Math.round(Math.random() * 100 + 1);
var num2 = Math.round(Math.random() * 100 + 1);
var num3 = Math.round(Math.random() * 100 + 1);
var num4 = Math.round(Math.random() * 100 + 1);
var num5 = Math.round(Math.random() * 100 + 1);
var num6 = Math.round(Math.random() * 100 + 1);
var totalNumber = num1 + num2 + num3 + num4 + num5 + num6;
var gradeMark = Math.round(totalNumber / 6);
var validGradeMar;
//Gerate grade mark
if (gradeMark >= 80) {
    validGradeMark = "You got A+";
} else if (gradeMark >= 70) {
    validGradeMark = "You got A";
} else if (gradeMark >= 60) {
    validGradeMark = "You got A-";
} else if (gradeMark >= 50) {
    validGradeMark = "You got B";
} else if (gradeMark >= 40) {
    validGradeMark = "You got C";
} else if (gradeMark >= 33) {
    validGradeMark = "You got D";
} else if (gradeMark >= 0) {
    validGradeMark = "You got F";
} else {
    validGradeMark = "It's not valid mark";
}
//Print Total Number
console.log("Total: "+totalNumber)

//Print Avg Number
console.log("Avg: "+gradeMark);

//Getting grading mark
console.log(validGradeMark)

//Getting last 2 digit
var lastDigit = validGradeMark.slice(-2);
console.log(lastDigit)
var lastDigit2 = lastDigit.trim();
switch (lastDigit2) {
    case "A+":
        console.log("Execellent");
        break;
    case "A":
        console.log("Great")
        break;
    case "A-":
        console.log("Amazing")
        break;
    case "B":
        console.log("Better")
        break;
    case "C":
        console.log("Good")
        break;
    case "D":
        console.log("Try more")
        break;
    case "F":
        console.log("Faild")
        break;
    default:
        console.log("Not Valid")

}