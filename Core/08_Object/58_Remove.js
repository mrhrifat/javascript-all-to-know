var obj = {
    name: "Islam",
    leaderName: "Muhammad",
    book: "Quran",
    time: "1400H",
    hijrat: "Madina"
}
console.log(obj)

//Worst method
obj.hijrat = null;
console.log(obj)

//Best method
delete obj.time
console.log(obj)

delete obj.book;
console.log(obj)

//New
var newObj = {
    "a": "Akida",
    "b": "Faraj Ilm",
    "c": "Akhlak"
}
newObj.a = "Akidah"
newObj["b"] = "Faraz Ilm"
var update = "c"
newObj[update] = "Akhlaq"
console.log(newObj)

delete newObj.c
console.log(newObj)