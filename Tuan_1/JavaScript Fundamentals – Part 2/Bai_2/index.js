const data = [125, 555, 44]
const total = []
const calcTip = (bill) => {
    let tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tips;
}

data.forEach(bill => {
    total.push(bill + calcTip(bill))
})
console.log("Giá trị tổng cộng của mỗi hóa đơn sau khi đã tính tiền tip là: ", total)