const totals = [1,2,3,4,5];

let sum = 0;
for (let iter = 0; iter < totals.length; iter++) {
    sum += totals[iter]
}
console.log(sum);

const suma = totals.reduce((suma, item) => suma + item, 0)
console.log(suma)