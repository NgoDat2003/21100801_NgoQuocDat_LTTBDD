const data1_dolphins = [44, 23, 71]
const data1_koalas = [65, 54, 49]
const data2_dolphins = [85, 54, 41]
const data2_koalas = [23, 34, 27]

const calcAverage = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    return sum / arr.length
}
const avgDolphins1 = calcAverage(data1_dolphins)
const avgKoalas1 = calcAverage(data1_koalas)
const avgDolphins2 = calcAverage(data2_dolphins)
const avgKoalas2 = calcAverage(data2_koalas)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins...')
    }
}

checkWinner(avgDolphins1, avgKoalas1)
checkWinner(avgDolphins2, avgKoalas2)