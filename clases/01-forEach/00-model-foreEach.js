//-----------metodo forEach ----------------
 
const letters = ["a","b","c"];

//--------forma tradicional---------
for(let index = 0; index < letters.length; index++) {
    console.log(letters[index]);
}
//-----------con forEach------------
letters.forEach(index => console.log(index));
