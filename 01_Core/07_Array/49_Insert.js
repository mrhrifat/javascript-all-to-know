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
arr.splice(3, 0, 5)
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(0, 1, 0)
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(0, 1, 0, 1, 2)
console.log(arr)

console.log()
//Remove
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr[3] = null;
console.log(arr)

//Remove with method
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.pop();
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.shift();
console.log(arr)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(2, 5, 365)
console.log(arr)

//New
//Literal
var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a1[10] = 11;
console.log(a1)
a1[10] = null;
console.log(a1)
delete a1[10]
console.log(a1)

//Method
a1.pop();
console.log(a1)
a1.shift()
console.log(a1)
a1.unshift(1)
console.log(a1)
a1.push(11)
console.log(a1)
a1.splice(1, 4, 5, 4, 3, 2)
console.log(a1)

var newArr=[1,2,3,4,5,6,7]
newArr[7]=8 //8
newArr.push(9) //9
newArr.shift() //Del 0
newArr.unshift(1) //1
newArr.pop()//Del 9
newArr[7]=null; //8 Null
newArr.slice(0,6)//1,2,3,4,5,6
newArr.splice(2,2)
newArr.splice(5,1,8)
console.log(newArr)