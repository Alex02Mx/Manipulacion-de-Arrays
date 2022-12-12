//---------------- todos los miembros  deben de ser menores de 15 ---------------
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];
const menores = team.every(edad => edad.age <= 15);
console.log(menores);
