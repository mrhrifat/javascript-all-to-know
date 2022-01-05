//Traversing 1
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log()
//Traversing 2
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i <= (arr2.length - 1); i++) {
    arr2[i] = arr2[i] + 2;
}
console.log(arr2);
console.log()
//Sum of array
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum = 0;
for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
}
console.log("Sum of array " + sum)
console.log()
//Even from array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(" " + arr[i])
    }
}
console.log("Odd")
//Odd from array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
}

//New
var arr01 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10]
for (var i = 0; i < arr01.length; i++) {
    console.log(arr01)
}
var arr02 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10]
for (var i = 0; i <= arr02.length - 1; i++) {
    arr02[i] = arr02[i] + 2;
}
console.log(arr02)
var arr03 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10]
var sum;
for (var i = 0; i < arr03.length; i++) {
    sum += arr03[i];
}
console.log(sum)


console.log()
console.log()

var newArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (var i = 0; i < newArr.length; i++) {
    console.log(newArr[i] + " ")
}

console.log()
console.log("Even")

var newArr2 = [,1,2,4,5,6,7,8,9,10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (var i = 0; i < newArr2.length; i++) {
    if (newArr2[i] % 2 == 0) {
        console.log(" " + newArr2[i])
    }
}

console.log()

var newSum = 0;
for (var i = 0; i < newArr.length; i++) {
    newSum += newArr[i];
}
console.log(newSum)