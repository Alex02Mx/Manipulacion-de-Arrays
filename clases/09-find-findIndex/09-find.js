const numbers = [1,2,3,4,3,6];

//-----------usando for-------------
let elemento = undefined;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === 3) {
        elemento = numbers[index];
        break;
    }else{
        elemento = undefined
    }
}
console.log(elemento);

//----------usando find------------

const encontrar = numbers.find(primero => primero === 9)
console.log(encontrar)