//Length with Literal Logic
function performAction(str) {
    var length = 0;

    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

console.log(performAction("Assalamu Alaikum, How are you"))
console.log(performAction("Assa"))

// var str2 = "Wa Alaikumus Salam, Alhamdulillah...What about you?"

// var length2 = "";
// var sum2 = 0;
// if (str2 !== length2) {
//     for (var i = 0; i < str2; i++) {
//         sum2 += i
//     }
// }
// console.log(sum2)