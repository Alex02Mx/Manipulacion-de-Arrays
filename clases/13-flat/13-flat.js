const matriz = [
    [1,2,3,[1,1,1,[4,4,4,[9,9,9]]]],
    [4,5,6,[2,2,2,[5,5,5]]],
    [7,8,9,[3,3,3,[6,6,6]]]
];

//------funcion recursiva flat-------
const arrayFlat = [];
function flatFn (array) {
    for (item of array) {
        if(item.length > 0) {
            flatFn(item)
        }else{
            arrayFlat.push(item);
        }
    }
}
flatFn(matriz);
console.log(arrayFlat);


// ----usando flat------
const matrizFlat = matriz.flat(4);
console.log(matrizFlat);
