var obj = {
    x: 10,
    y: 20,
    z: 30
}
//keys
console.log(Object.keys(obj));

//values
console.log(Object.values(obj));

//entries
console.log(Object.entries(obj));

//create
var obj2 = Object.create(obj);
obj2.x = 100;
console.log(obj2);

//assign
var obj3 = Object.assign(obj);
obj3.x = 50;
obj3.h = 80;
console.log(obj3)

//New

var ob1 = {
    a: 10,
    b: 20,
    c: 30
}
console.log(ob1)
console.log(Object.keys(ob1))
console.log(Object.values(ob1))
console.log(Object.entries(ob1))
var ob2 = Object.create(ob1)
console.log(ob2)
ob2.d = 40;
console.log(ob2)

console.log()
var ob3 = Object.assign(ob1)
console.log(ob3)
ob3.e = 50;
console.log(ob1)
console.log(ob2)
console.log(ob3)


//New
var newObj = {
    "a": "Akidah",
    "b": "Faraz Ilm",
    "c": "Akhlaq"
}
console.log()
console.log(Object.entries(newObj))
console.log(Object.keys(newObj))
console.log(Object.values(newObj))
var newObj2 = {}
console.log(newObj2)
newObj2 = Object.assign(newObj)
console.log(newObj2)
console.log()
var newObj3 = {}
console.log(newObj3)
newObj3 = Object.create(newObj2)
console.log(newObj3)
newObj3.d = "Sunnah"
console.log(newObj3)