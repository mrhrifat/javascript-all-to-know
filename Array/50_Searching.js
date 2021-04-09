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
