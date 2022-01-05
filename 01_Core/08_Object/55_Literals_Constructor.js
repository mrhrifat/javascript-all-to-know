//Literal
var obj = {}
obj.x = 10;
console.log(obj)
console.log(obj.x)

//Literal 2
var obj = {
    x: 20,
    y: 20
}
console.log(obj)



//Object
var obj2 = new Object();
obj2.v = 10;
obj2.y = 10;
obj2.z = 10;
console.log(obj2)

var obj3 = Object();
obj3.a = 15;
console.log(obj3);

//New
var obj1 = {
    x: 10,
    y: 20,
    z: 30
}
console.log(obj1)
var obj2 = new Object();
obj2.x = 10;
obj2.y = 20;
obj2.z = 30;
obj2.a = 40;
console.log(obj2)

//New
var newObj = {} //Empty Object
console.log(newObj)
newObj.x = 20;
console.log(newObj)
var newY = {
    x: 30,
    y: 20,
    z: 10
}
console.log(newY)

var newCObj = new Object()
console.log(newCObj)
newCObj.x = 20;
console.log(newCObj)
var newCObj2 = new Object("x: 20","y: 20","z: 20")
console.log(newCObj2)