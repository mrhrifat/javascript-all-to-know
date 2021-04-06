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
