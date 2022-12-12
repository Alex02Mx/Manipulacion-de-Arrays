const mensaje = "La forma de correr Python";

function parseToURL(title) {
    return title.split(" ").join("-").toLowerCase();
}   

console.log(parseToURL(mensaje));
