//String
var str = "1";
var str2 = "Mrh";
var str3 = 'Rifat';
console.log(str + " " + str2 + " " + str3);

//Interger & Float to String
var convertIS = 40;
var convertFS = 40.87;
console.log(typeof (convertIS));
console.log(typeof (convertFS));
console.log(convertIS.toString());
console.log(convertFS.toString());
console.log(typeof (convertIS));
console.log(typeof (convertFS));

console.log();

//With Constructor
var convertIS2 = String(40);
var convertFS2 = String(40.87);
console.log(typeof (convertFS2));
console.log(typeof (convertIS2));
console.log(convertIS2)
console.log(convertFS2)
console.log(typeof (convertFS2));
console.log(typeof (convertIS2));

console.log();
console.log(Number.parseFloat(convertFS2));
console.log(Number.parseInt(convertIS2));
console.log(typeof (convertFS2));
console.log(typeof (convertIS2));

console.log()

var number1=4.3
var cvStr=String(number1)
console.log("* "+ typeof number1)
console.log("* "+ typeof cvStr)

console.log();

// Solving Problem of Reconversion
var a = 5;
console.log(typeof (5));

var b = a.toString();

console.log(typeof (b));

var c = parseInt(b);

console.log(typeof c);

console.log()
// Reconversion
var x = 5
console.log(typeof (x))
var y = x.toString()
console.log(typeof (y))
var z = parseInt(y)
console.log(typeof z)
