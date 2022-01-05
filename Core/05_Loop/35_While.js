var a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

//Shuffle
var isRunning = true;
while (isRunning) {
    var rand = Math.round(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log("Winner");
        isRunning = false;
    } else {
        console.log("You got " + rand);
    }
}

//Shuffle Number
var running = true;
while (running) {
    var random = Math.round(Math.random() * 5 + 1)
    if (random == 3) {
        console.log("Hurray! You get it")
        running = false;
    } else {
        console.log("Alas! The number is " + random)
    }
}

console.log()
//New
ifFalse2 = true;

while (ifFalse2) {
    var randomGn = Math.round(Math.random() * 5 + 1)
    if (randomGn == 4) {
        console.log("The No is 4")
        ifFalse2 = false;
    } else {
        console.log("Alas...Try Again " + randomGn)
    }
}