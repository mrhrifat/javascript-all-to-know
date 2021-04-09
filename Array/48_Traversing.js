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
console.log()
//Odd from array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
}