//---------Crear una funcion que que filtre solo las palabras mayores de 4 letras--------
//---------recibiendo un array como parametro--------------------------------------------

//------------------Arrays-------------------------
const array1 = ['amor', 'sol', 'piedra', 'día'];
const array2 = ['rosa', 'gol', 'pez', 'día', 'gafas'];

function filterByLength(array) {
    return array.filter(item => item.length >= 4?? console.log(item))
}

console.log(filterByLength(array1));