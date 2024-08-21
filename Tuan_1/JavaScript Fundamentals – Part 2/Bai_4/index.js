let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
bills.forEach(bill => {
    tips.push(calcTip(bill));
    totals.push(bill + calcTip(bill));
});
console.log(bills);
console.log(tips);
console.log(totals);
const calcAverage = (arr) => {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum / arr.length;
}
console.log("Average Total: " + calcAverage(totals));