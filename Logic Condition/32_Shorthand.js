//Common Way
var na = "Rifat";
var fullName = "";
if (na.length==0) {
    fullName = "Mrh Rifat";
    console.log("1st")
} else {
    fullName = na;
    console.log("2nd")
}
// Shorthand
var roll="";
var reg = roll || "938203"
console.log(reg)

var book ="Time Management"
var pdf = book || "Who understand value of time";
console.log(pdf)

//Common Way
var ok =false;
if(ok == true){
    console.log("Everything is ok")
}else{
    console.log("Something is not ok")
}

//Shorthand
isOk=true;
var check = isOk && "Everythig is okay"
console.log(check)

isOk2=false;
var check2= isOk2 && "Wow";
console.log(check2);