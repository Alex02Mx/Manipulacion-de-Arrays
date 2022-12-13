const products = [
    {title: "Pizza", price: 121, id: "🍕"},
    {title: "Burger", price: 121, id: "🍔"},
    {title: "Hot Dog", price: 121, id: "🌭"}
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const busqueda = products.findIndex(item => item.title == "Burger");
if(busqueda) {
    myProducts.push(products[busqueda]);
    products.splice(busqueda,1);
}

console.log(products);
console.log(myProducts);