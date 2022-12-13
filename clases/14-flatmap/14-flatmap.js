const users = [
    { userId: 1, userName: "Tom", atributes: ["nice","cool"]},
    { userId: 2, userName: "Mike", atributes: ["nice"]},
    { userId: 3, userName: "Nico", atributes: ["nice","cool"]},
];

const newArray = users.map(item => item.atributes).flat(1)
console.log(newArray);

const array2 = users.flatMap(item => item.atributes);
console.log(array2);