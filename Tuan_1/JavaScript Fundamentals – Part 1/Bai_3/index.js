// Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

let dolphinsAverage1 = dolphinsScores1.reduce((a, b) => a + b, 0) / dolphinsScores1.length;
let koalasAverage1 = koalasScores1.reduce((a, b) => a + b, 0) / koalasScores1.length;
if (dolphinsAverage1 > koalasAverage1) {
    console.log("Data 1 : Dolphins win the trophy!");
} else if (koalasAverage1 > dolphinsAverage1) {
    console.log("Data 1 : Koalas win the trophy!");
} else {
    console.log("Data 1 : It's a draw!");
}

// Bonus 1
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

let dolphinsAverage2 = dolphinsScores2.reduce((a, b) => a + b, 0) / dolphinsScores2.length;
let koalasAverage2 = koalasScores2.reduce((a, b) => a + b, 0) / koalasScores2.length;
if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log("Data bonus 1 : Dolphins win the trophy!");
} else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {
    console.log("Data bonus 1 : Koalas win the trophy!");
} else if (dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log("Data bonus 1 : It's a draw!");
} else {
    console.log("Data bonus 1 : No team wins the trophy!");
}
// Bonus 2
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

let dolphinsAverage3 = dolphinsScores3.reduce((a, b) => a + b, 0) / dolphinsScores3.length;
let koalasAverage3 = koalasScores3.reduce((a, b) => a + b, 0) / koalasScores3.length;

if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
    console.log("Data bonus 2 : Dolphins win the trophy!");
} else if (koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100) {
    console.log("Data bonus 2 : Koalas win the trophy!");
} else if (dolphinsAverage3 === koalasAverage3 && dolphinsAverage3 >= 100 && koalasAverage3 >= 100) {
    console.log("Data bonus 2 : It's a draw!");
} else {
    console.log("Data bonus 2 : No team wins the trophy!");
}