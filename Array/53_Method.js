var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr)
//join
console.log(arr.join(","))
console.log(arr.join(" "))
console.log(arr.join(" | "))
console.log(arr.join(" $ "))
//fill
console.log(arr.fill(0));
console.log(arr.fill(true));
//concat
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = [11, 12, 13, 14, 15]
console.log(arr.concat(arr2));
//Array
console.log(Array.isArray(arr))
var i = 4;
console.log(Array.isArray(i))

//Problem
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = arr;
console.log(arr[0])
arr2[0]=12;
console.log(arr[0])
//Sloving Problem
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = Array.from(arr);
console.log(arr[0])
arr2[0]=12;
console.log(arr[0])