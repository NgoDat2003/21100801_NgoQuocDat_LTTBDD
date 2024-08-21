//Challenge 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

let markHigherBMI1 = markBMI1 > johnBMI1;
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;
let markBMI2 = markMass2 / (markHeight2 * markHeight2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
let markHigherBMI2 = markBMI2 > johnBMI2;
// console.log("Mark's BMI 1: " + markBMI1);
// console.log("John's BMI 1: " + johnBMI1);
// console.log("Mark's BMI 2: " + markBMI2);
// console.log("John's BMI 2: " + johnBMI2);
console.log("Data 1: Is Mark's BMI higher than John's? " + markHigherBMI1);
console.log("Data 2: Is Mark's BMI higher than John's? " + markHigherBMI2);
//Challenge 2
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
}
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
}