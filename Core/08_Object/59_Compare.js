var obj1 = {
    x: 20,
    y: 30
}
var obj2 = {
    x: 20,
    y: 30
}
//Value
if (obj1 == obj2) {
    console.log(true)
} else {
    console.log(false)
}
//Value with Data types
if (obj1 === obj2) {
    console.log(true);
} else {
    console.log(false)
}

//Actually you can't compare object like this way.

//The best way to compare object given below
if (obj1.x == obj2.x && obj1.y == obj2.y) {
    console.log(true);
} else {
    console.log(false);
}

//Value with data types
if (obj1.x === obj2.x && obj1.y === obj2.y) {
    console.log(true)
} else {
    console.log(false)
}

//JSON
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log(true);
} else {
    console.log(false)
}

//New
//Best method for compare object
var ob1 = {
    a: 10,
    b: 20
}
var ob2 = {
    a: 10,
    b: 20
}
if (ob1.a == ob2.a && ob1.b == ob2.b) {
    console.log("All are Ok")
} else {
    console.log("Somting is wrong")
}
//With datatype
var ob1 = {
    a: 10,
    b: 20
}
var ob2 = {
    a: "10",
    b: 20
}
if (ob1.a === ob2.a && ob1.b === ob2.b) {
    console.log("All are Ok")
} else {
    console.log("Somting is wrong")
}

//JOSN

var ob5 = {
    a: 10,
    b: 20
}
var ob6 = {
    a: 10,
    b: 20
}
if (JSON.stringify(ob5) == JSON.stringify(ob6)) {
    console.log(true)
} else {
    console.log(false)
}

console.log()
// Literal
var a = {
    "a": "Akida",
    "b": "Faraj Ilm",
    "c": "Akhlak"
}
var b = {
    "a": "Akidah",
    "b": "Faraz Ilm",
    "c": "Akhlaq"
}
function action(leftObj, rightObj) {
    if (leftObj.a === rightObj.a) {
        if (leftObj.b === rightObj.b) {
            if (leftObj.c === rightObj.d) {
                return "All cases are true"
            }
            return "Two cases are true"
        }
        return "One case are true"
    }
    return "No cases are ture"
}
console.log(action(a, b))
var c = {
    a: 10,
    b: 20
}
var d = {
    a: 10,
    b: 20
}
console.log(action(c, d))


function js(leftObj,rightObj){
    if(JSON.stringify(leftObj)===JSON.stringify(rightObj)){
        return true
    }
    return false
}
console.log()
console.log(js(a,b))
console.log(js(c,d))