var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var find = 12;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log("Data found at index: " + arr[i]);
        isFound = true;
        break;
    }
}
if (!isFound) {
    console.log("Data not found")
}

var arr1 = [30, 4, 5, 75, 234, 25, 36, 213, 56, 674, 243];
find1 = 30;
isFound1 = false;
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] == find1) {
        console.log("Data found at index: " + arr1[i])
        isFound1 = true;
    }
}
if (!isFound1) {
    console.log("Data not found")
}


function action(arr, data) {
    ifFound = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return data
        }
        ifFound = true;
    }
    if (ifFound) {
        return "Not found"
    }
}


console.log(action([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 30))
console.log(action([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 300))
console.log(action([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 60))