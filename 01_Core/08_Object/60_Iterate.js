var obj = {
    x: 10,
    y: 20,
    z: 30
}
// Properties
console.log("x" in obj);
console.log("y" in obj);
console.log("a" in obj);

//For in Loop
for (var i in obj) {
    console.log(i)
}
var obj = {
    x: 10,
    y: 20,
    z: 30
}
for (var j in obj) {
    console.log(j + " : " + obj[j])
}

//New
var obj2 = {
    a: 10,
    b: 20,
    c: 30
}
for (var j in obj2) {
    console.log(j + " || > " + obj2[j])
}

//In Loop
var newObj = {
    "a": "Akidah",
    "b": "Faraz Ilm",
    "c": "Akhlaq"
}
console.log()
for (var x in newObj) {
    console.log(x + " " + newObj[x])
}