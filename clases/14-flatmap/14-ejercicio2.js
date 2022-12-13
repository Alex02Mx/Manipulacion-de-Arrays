//------contar las palabras en el array----------
const array = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]
//-------Usando flatMap---------
function countWords(array) {
    return array.flatMap((i) => i.split(" ")).length;
}
//-------Usando split-------
function countWords(array) {
   return (array.join(" ").split(" ")).length
}

console.log(countWords(array))
  