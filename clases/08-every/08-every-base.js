const numbers = [1,2,4,4];

let res = true
for (let iter = 0; iter < numbers.length; iter++) {
    if (!(numbers[iter] % 2 === 0)) {
        res = false
        break;
    }
}
console.log(res)

const allNumbers = numbers.every(item => item % 2 === 0)
console.log(allNumbers)