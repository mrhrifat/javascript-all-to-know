//1-100
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// Even 1-100
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Odd 1-100
for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Total Even 1-100
var result = "";
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        result += i + " ";
        sum += i
    }

}
console.log(result)
console.log(sum)

//Total 1-10

var sum2 = 0;
for (var i = 0; i <= 10; i++) {
    console.log(i + " + " + sum2 + " = " + (sum2 += i))
}
