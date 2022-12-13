const elements = [1,2,3,4];
const moreElements = [5,6,7,8];

//-------usando un regular for--------
const newarray = [...elements];
for (let index = 0; index < moreElements.length; index++ ) {
    newarray.push(moreElements[index]);
}
console.log(newarray);

//---------Usando concat------------
const arrayConcat = elements.concat(moreElements)
console.log(arrayConcat);

//---------usando el spread operator pa aconcatenar ---------

const spreadConcatenar = [...elements,...moreElements];
console.log(spreadConcatenar);



