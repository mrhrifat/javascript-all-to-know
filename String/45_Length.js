var str = "Assalamu Alaikum, How are you";

//Length with Literal Logic
var sum = 0;
if (str != "") {
    for (var i = 0; i < str.length; i++) {
        sum += i;
    }
}
console.log(sum)
