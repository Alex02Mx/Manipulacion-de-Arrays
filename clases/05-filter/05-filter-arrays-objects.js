//--------------Array con objetos-------------
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true
    }
];

//------------Filtrando por precio mayor que y delivered--------
const precio = orders.filter(item => item.delivered && item.total > 100);
console.log(precio);

//-------------Funcion para buscar de informacion--------------

function buscador (name) {
    return orders.filter(item => name == item.customerName?? item);
}
console.log(buscador("Santiago"));

//--------------Busqueda usando includes---------------
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search("Nico"))