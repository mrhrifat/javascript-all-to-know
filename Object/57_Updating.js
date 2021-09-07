var obj = {
    name: "Islam",
    leaderName: "Muhammad",
    book: "Quran",
    time: "1400H"
}
console.log(obj)

//Update existing Property
obj.time = "1450H";
console.log(obj)

obj["leaderName"] = "Muhammad (SAW)";
console.log(obj);

//New Property
obj.hijrat = "Madina";
console.log(obj)

obj["place"] = "Makka";
console.log(obj)

//New
/*
You can update or add new property in 2 ways (2+2)
*/
var laptop = {
    costly: "Apple",
    best: "Dell",
    good: "HP",
    low: "Walton"
}
//Add
console.log(laptop)
laptop.medium = "Acer"
console.log(laptop)

laptop["better"] = "Samsung"
console.log(laptop)

//Update
console.log()
console.log(laptop)
laptop.medium = "Update Acer"
laptop.low = "Update Walton"
console.log(laptop)

//New
//Add
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

