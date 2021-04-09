//Insert with literal
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr[4] = 12;
console.log(arr)

//Insert with method
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.push(11)
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.unshift(0)
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(3,0,5)
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(0,1,0)
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(0,1,0,1,2)
console.log(arr)

console.log()
//Remove
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr[3]=null;
console.log(arr)

//Remove with method
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.pop();
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.shift();
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(2,5,365)
console.log(arr)