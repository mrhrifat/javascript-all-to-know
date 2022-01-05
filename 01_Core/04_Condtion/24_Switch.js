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

//Month
var getDate2 = new Date();

console.log(getDate2)

var getMonth = getDate2.getMonth();

console.log(getMonth)

switch (getMonth) {
    case 0:
        console.log("Januray")
        break;

    case 1:
        console.log("February")
        break;

    case 2:
        console.log("March")
        break;

    case 3:
        console.log("April");
        break;

    case 4:
        console.log("May");
        break;

    case 5:
        console.log("June")
        break;

    case 6:
        console.log("July");
        break;

    case 7:
        console.log("August");
        break;

    case 8:
        console.log("Spetember");
        break;

    case 9:
        console.log("October");
        break;

    case 10:
        console.log("November")
        break;

    case 11:
        console.log("December")
        break;

    default:
        console.log("Not a valid month");
        break;
}


//New
var getD = new Date()
var getM = getD.getMonth()

switch (getM) {
    case 0:
        console.log("Jan")
        break;

    case 1:
        console.log("Feb")
        break;

    case 2:
        console.log("Mar")
        break;

    case 3:
        console.log("Apr")
        break;

    case 4:
        console.log("May")
        break;

    case 5:
        console.log("June")
        break;

    case 6:
        console.log("July")
        break;

    case 7:
        console.log("Aug")
        break;

    case 8:
        console.log("Sep")
        break;

    case 9:
        console.log("Oct")
        break;

    case 10:
        console.log("Nov")
        break;

    case 11:
        console.log("Dec")
        break;

    default:
        console.log("Not a valid Month")
        break;


}