var isRunning = true;
while (isRunning) {
    var rand = Math.round(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log("Winner");
        break;
    } else {
        console.log("You got " + rand);
    }
}

//Loop
for (var i = 0; i <= 10; i++){
    if(i==5){
        break
    }else{
        console.log(i);
    }
}