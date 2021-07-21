let day = 14;
let month = 9;
let min = 38;
let age = 16;

if (day >= 1 && day <= 10) {
    console.log("first decade");
} else if (day >=11 && day <=20) {
    console.log("second decade");
} else if (day >=21 && day <= 31) {
    console.log("third decade");
} else {
    console.log("else");
}

if (month >= 1 && month <= 2 || month === 12) {
    console.log("winter");
} else if (month >= 3 && month <=5) {
    console.log("spring");
} else if (month >= 6 && month <= 8) {
    console.log("summer");
} else if (month >= 9 && month <= 11) {
    console.log("autumn");
} else {
    console.log("else");
}

if (min >= 0 && min <= 15) {
    console.log("first quarter");
} else if (min > 15 && min <= 30) {
    console.log("second quarter");
} else if (min > 30 && min <= 45) {
    console.log("third quarter");
} else if (min > 45 && min <=59) {
    console.log("fourth quarter");
} else {
    console.log("else");
}

age >= 18 ? console.log("adult") : console.log("underage");

