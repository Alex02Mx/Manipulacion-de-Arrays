//------------------  modulo map  ---------------------
const letters = ["a","b","c"];
//----------  forma tradicional con un for  -----------
const letters2 = [];
for (let index=0;index<letters.length;index++){
    letters2.push(letters[index] + "z");
}
console.log(letters)
console.log(letters2);
//-------------------  usando map con return implisito ------------------

const letters3 = letters.map(element => element + "z");
console.log(letters)
console.log(letters3)

//-------------------  con return necesario  ---------------------------

const letters4 = letters.map(element => {
    let number = 25;
    return element + number;
})
console.log(letters4)
//--------------reto----------------------
const numbers = [1,2,3,4,5,6];

function multiplicar(array) {
    return newArray = array.map(element => element * 2)
}

console.log(multiplicar(numbers))
