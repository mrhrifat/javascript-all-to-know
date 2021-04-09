//Getting Date
var getDate = new Date();

// 0 = Sunday, 1 = Monday, 2 = Tuesday... 6 = Saturday
// Get today
var today = getDate.getDay();

console.log("Get day: " + today);

//Switch Today
switch (today) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("This is not a valid day!");
        break;
}