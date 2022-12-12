
const products = [
    {title:"Burger",price:120},
    {title:"Pizza",price:80}
];
//------------------------------------------------
const app = document.getElementById("app");
products.forEach(item => app.innerHTML += `<li>${item.title} - ${item.price}</li>`);
//-------------------------------------------------
products.forEach(property => console.log(property.title))
//-----------------------------------------------
products.forEach(({title, price}) => {
    console.log(title, price)
})