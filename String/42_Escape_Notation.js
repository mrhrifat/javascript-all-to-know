//Escape Notation menas some escape caracter that make some javascript statement more flexible and in an alternative way with some escape character like, \

// Using ' ' in " "
var str1 = "I live in 'Bangladesh'";

// Using '' in ''
var str2 = 'I live in \'Bangladesh\'';

//Using \ in statement
var str3 = "I live in \\ Bangladesh";

//Making new line is statement
var str4 = "I live in \n Bangladesh";

//Making tab space in a statement
var str5 = "I live in \t Bangladesh";

console.log(str1, str2, str3, str4, str5);

var esc1 = "I live in Saudi Arab"
var esc2 = "I live in 'Saudi' Arab"
var esc3 = 'I live in "Saudi" Arab'
var esc4 = "I live in \"Saudi\" Arab"
var esc5 = "I live in \tSaudi Arab"
var esc6 = "I live in \nSaudi Arab"
var esc7 = "I live in \\ Saudi Arab"

console.log(esc1, esc2, esc3, esc4, esc5, esc6, esc7)

var escp1 = "I know Javascript Programming Language"
var escp2 = 'I know "Javascript" Programming Language'
var escp3 = "I know \"Javascript\" Programming Language"
var escp4 = "I know \tJavascript Programming Language"
var escp5 = "I know \nJavascript Programming Language"
var escp6 = "I know \\Javascript Programming Language"
var escp7 = "I know Java\dscript Programming Language"

console.log(escp1,escp2,escp3,escp4,escp5,escp6,escp7)
