var str1 = "I am";
var str2 = " Rifat";
var str4 = "I am rifat"
//concat
console.log(str1.concat(str2));

//substr
console.log(str4.substr(5));
console.log(str4.substr(5, 9));
console.log(str4.substr(7, 9));

//charAt
console.log(str1.charAt(3));

//startsWith
console.log(str1.startsWith("I"));
console.log(str1.startsWith("I am"));
console.log(str1.startsWith("Rifat"));

//endsWith
console.log(str2.endsWith("t"));
console.log(str2.endsWith("t"));
console.log(str2.endsWith("Rifat"));

//toUpperCase
console.log(str1.toUpperCase());

//toLowerCase
console.log(str2.toLowerCase());

//trim
var str3 = "       I am in BD      .Ok"
console.log(str3);
console.log(str3.trim());

//spilt
console.log(str4.split());


/*
String Method
01) toUpperCase
02) toLowerCase
03) spilt
04) join
05) concat
06) charAt
07) substr
09) starstWith
10) endsWith
11) trim
*/
var s1="I am"
var s2="Geek"
var s3="I am Geek"
var s4="      I a m G  e  e   k     "
console.log(
    s1.concat(s2),
    s1.endsWith("m"),
    s1.endsWith("w"),
    s2.startsWith("G"),
    s2.startsWith("g"),
    s1.toLowerCase(),
    s2.toUpperCase(),
    s4.trim(),
    s3.split(),
    s3.charAt("5"),
    s3.substr(4,7)
)

var str1="Successful are"
var str2="   those who       "
var str3=" purify themselves"
console.log(
    str1.concat(str2).concat(str3),
    str1.endsWith("e"),
    str1.length,
    str1.split(),
    str1.startsWith("S"),
    str3.startsWith("p"),
    str3.substr(5,8),
    str3.substr(5),
    str1.toUpperCase(),
    str2.trim()
)