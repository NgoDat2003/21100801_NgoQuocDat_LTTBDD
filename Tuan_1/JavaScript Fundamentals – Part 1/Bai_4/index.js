let bills = [275, 40, 430];

for (let i = 0; i < bills.length; i++) {
    let tip = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;

    let total = bills[i] + tip;

    console.log(`The bill was ${bills[i]}, the tip was ${tip}, and the total value ${total}`);
}