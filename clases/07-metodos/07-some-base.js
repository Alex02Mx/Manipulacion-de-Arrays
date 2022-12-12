// const numbers = [1,2,3,4];
// const rta2 = numbers.some(check => check % 2 === 0);
// console.log(rta2);


let rta = false;
for(let index = 0; index < numbers.length; index++) {
    const item = numbers[index];
    if(item % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta)
