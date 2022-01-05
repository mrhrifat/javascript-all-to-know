// Number is a primitive data type
// Declareing Number 
var numberOfReg = 4503;
var numberOfPie = 3.1416;
console.log(numberOfReg);
console.log(numberOfPie);

//Convert Float to Integer
var convertFI = Number(4.6)
console.log(Number.parseInt(convertFI));
console.log(Number.parseInt(numberOfPie));

//Convert String to Integer
var convertSI = Number("45");
console.log(Number.parseInt(convertSI));
console.log(Number.parseInt(convertSI) + 9);
var str = "4059"
console.log(Number.parseInt(str))

//Converto Integer to Float
var convertIF = Number(40);
console.log(Number.parseFloat(convertIF));
console.log(Number.parseFloat(convertIF) + 7.6);
var conversion = Number(50)
console.log(typeof conversion);
console.log(Number.parseFloat(conversion))

var num1 = 4
var pi = 3.1416
console.log(num1 + " " + pi + "\nType of 4:" + typeof num1 + " Type of pi: " + typeof pi)
var int1 = Number.parseInt(pi)
console.log(typeof int1 + " " + int1)
var str = int1.toString();
console.log(typeof str)
var int2 = Number.parseInt(str)
console.log(typeof int2)



