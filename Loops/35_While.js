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