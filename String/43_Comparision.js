/*
01) String Comparision means compare two are more string with comparision operator. But it not as like easy as number comparision.
02) String comparision follow the method of "Lexicographic System"
03) z, x, y .... a, Z, X, Y....A
04) So small a is grater than capital Z
*/
var str1 = "z";
var str2 = "a";
var str3 = "Z";
var str4 = "A";

if (str1 > str2) {
    if (str2 > str3) {
        if (str3 > str4) {
            console.log("Yes... z > a > Z > A")
        }
    }
}