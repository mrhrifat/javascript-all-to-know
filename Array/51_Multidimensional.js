var arr = [[34, 56, 78], [56, 78, 35], [45, 35, 89], [34, 57, 97], [45, 23, 65]];
console.log(arr)

//Traverse
console.log(arr[1][2])
console.log(arr[3][1])
console.log(arr[0][2])
console.log(arr[4][0])
console.log(arr[2][2])

//Traverse
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Traverse
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log("Element " + i + " " + arr[i][j])
    }
}

//3 Dimensional Traverse
var arr = [[[45, 56, 78], [56, 78, 45]], [[45, 56, 78], [56, 78, 45]], [[45, 56, 78], [56, 78, 45]]];
console.log(arr)

//Traverse
console.log(arr[0][0][1])
console.log(arr[0][1][1])
console.log(arr[1][1][1])
console.log(arr[2][1][1])

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i].length; k++) {
            console.log("Element of "+i+" "+ j+ " " +arr[i][j][k])
        }
    }
}