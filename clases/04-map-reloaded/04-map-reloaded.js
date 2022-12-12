//--------------Array de Objetos----------------
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
]
//----------------leyendo solo una propiedad de cada objeto ----------
// const arrayNumbers = orders.map(item => item.total);
// console.log(arrayNumbers);

//----agregando una propiedad al array pero afectara al array original---------
// const agregar = orders.map(items => {
//     return items.tax = .14;
// })
// console.log(orders)
// console.log(agregar);

//-----------sin mutar el original--------------
const agregar = orders.map(items => {
    return {
        ...items,
        tax: .14
    }
})
console.log(orders)
console.log(agregar);
