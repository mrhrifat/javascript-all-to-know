var i = 5;
do {
    console.log("You got " + i)
    i++;
} while (i <= 10);

//2nd
var r = 5;
do {
    console.log("You have " + 5);
    i++;
} while (i <= 5);

//Shuffle
var isRunning = true;
do {
    var rand = Math.round(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log("You are winner");
        isRunning = false
    } else {
        console.log("You got " + rand);
    }
} while (isRunning != false)