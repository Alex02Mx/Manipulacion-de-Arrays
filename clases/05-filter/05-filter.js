//---------Filtrando un array de strings-------------
const words = ['spray', 'limit', 'elite', 'exuberant'];

//------------con For Tradicional---------------
const newArray = [];
for (let iter = 0; iter < words.length; iter++) {
    const element = words[iter];
    if(element.length > 6){
        newArray.push(element);
    }
}
console.log(newArray);

//--------------Usando Filter------------------------------
const newArray2 = words.filter(item => item.length > 6?? item)

console.log(newArray2);
console.log(words);
