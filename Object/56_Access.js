/*
You can access data of an object in 3 ways
01) Dot notation
02) Array notation
03) Variable notation
*/

var obj = {
    x: 10,
    y: 20,
    z: 30
}
//Dot Notation
console.log(obj.x)

//Array Notation
console.log(obj["z"])

//With Variable
var show = "y";
console.log(obj[show]);



//New
var obj1 = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj1.a)
console.log(obj1["b"])
var show1 = "c";
console.log(obj1[show1])

var newObj = {
    "HTML": 5,
    "CSS": 3,
    "ES": 6
}
console.log()
console.log(newObj.HTML)
console.log(newObj["CSS"])
var show = "ES"
console.log(newObj[show])