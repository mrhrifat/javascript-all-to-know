// String to Number
var str = "10";
var str2 = '101011';
var str3 = "Name" //Only number type string can be convert to number but any text type string can't do it.
console.log(str.toString());
console.log(str2.toString());
console.log()

// Number to String
/* There is 2 type method to convert into number 
01) Constructor [ Number ]
02) Method [ parseInt ]
*/
console.log(typeof str);
var number = parseInt(str);
console.log(typeof number);

console.log()

console.log(typeof str2);
var number2 = Number(str2);
console.log(typeof number2)

// parseFloat is also a method
var floatNumber = parseFloat(number2);
console.log(typeof floatNumber);

console.log();

var inf = Infinity;
console.log("Before conversion: " + typeof inf + " ");
var infStr = inf.toString();
console.log("After conversion: " + typeof infStr)

console.log();
/*
There is 5 falsy value. That always return false
01) ''
02) 0
03) null
04) undefined
05) NaN
*/
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log();
console.log(Boolean(405));
console.log();
var x = true;
console.log(typeof x)
console.log(x.toString());
var y = x.toString();
console.log(typeof y)
