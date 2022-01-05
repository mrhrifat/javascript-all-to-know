//Reverse with literal algorithm
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
for (var i = 0; i <= ((arr.length - 1) / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr)

//New
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr)

console.log(arr.reverse())
console.log(arr.reverse())



function action(arr) {
    for (var i = 0; i < (arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

console.log(action([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))
console.log(action([1, 2, 3, 4, 5]))

var arr = [1, 2, 3, 4, 5]
for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}
console.log(arr)