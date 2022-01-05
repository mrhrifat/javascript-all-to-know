// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr)
// //join
// console.log(arr.join(","))
// console.log(arr.join(" "))
// console.log(arr.join(" | "))
// console.log(arr.join(" $ "))
// //fill
// console.log(arr.fill(0));
// console.log(arr.fill(true));
// //concat
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr2 = [11, 12, 13, 14, 15]
// console.log(arr.concat(arr2));
// //Array
// console.log(Array.isArray(arr))
// var i = 4;
// console.log(Array.isArray(i))

// //Problem
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr2 = arr;
// console.log(arr[0])
// arr2[0] = 12;
// console.log(arr[0])
// console.log()
// //Sloving Problem
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr2 = Array.from(arr);
// console.log(arr[0])
// arr2[0] = 12;
// console.log(arr[0])

// //New
// arr1 = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr1.join(' '))
// console.log(arr1.join(' | '))
// console.log(arr1.join(' " '))
// console.log(arr1.fill(0))
// console.log(arr1.fill(true))

// arr1 = [1, 2, 3, 4, 5, 6, 7]
// arr2 = [8, 9, 10]
// console.log(arr1.concat(arr2))
// console.log(Array.isArray(arr1))
// console.log(Array.isArray(arr2))
// var ii = 10;
// console.log(Array.isArray(ii))

// console.log()
// console.log(arr1)
// console.log(arr2)
// arr2 = arr1;
// console.log(arr2)
// console.log(arr2[0])
// arr2[0]=12;
// console.log(arr2[0])

// console.log()
// arr2 = Array.from(arr1)
// console.log(arr2[0])
// arr2[0]=12;
// console.log(arr2[0])


var arr = [1, 2, 3, 4, 5]
var arr2 = [6, 7, 8, 9, 10]
console.log(arr.concat(arr2))
console.log(arr.join(""))
console.log(arr.join(" + "))
console.log(arr.join(" "))
console.log(arr.join(" $ "))
console.log(arr.fill(" "))

var arr11 = [1, 2, 3, 4, 5]
var arr22 = [6, 7, 8, 9, 10]
arr22 = Array.from(arr11)
console.log(arr11)
console.log(arr22)
var arr111 = [1, 2, 3, 4, 5]
var arr222 = 6

console.log(Array.isArray(arr111))
console.log(Array.isArray(arr222))

var newArr22 = Array.from(arr22)
console.log(newArr22)