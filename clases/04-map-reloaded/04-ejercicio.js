//-------- Agregar Propiedad taxes con el 19 porciento por objeto-------
const arrayDeObjetos = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
]

function addNewAttr(array) {
    return array.map(item => {
        return ({
            ...item,
            taxes: parseInt(item.price * .19) 
        })
    })
}
console.log(addNewAttr(arrayDeObjetos));



  