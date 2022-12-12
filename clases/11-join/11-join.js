const elements = ["fire","air","water"];

let rtaFinal = "";
const separador = "--"
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separador
}

const mezcla = elements.join("__")
console.log(mezcla);