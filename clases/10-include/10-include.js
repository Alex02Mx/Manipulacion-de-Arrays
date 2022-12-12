//------------Metodo include------------
const pets = ["cat", "dog", "bat"];

//------------usando un for tradicional------------
let busqueda = false;
for (let item = 0; item < pets.length; item++) {
    if ( pets[item] === "dog") {
        busqueda = true;
        break;
    }
    else{
        busqueda = false;
    }
};
console.log(busqueda);

//------------usando include-------------

const busq = pets.includes("dog");
console.log(busq);
