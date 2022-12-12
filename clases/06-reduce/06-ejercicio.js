const data = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Zulema",
        level: "height"
    },
    {
        name: "Santiago",
        level: "low"
    },
]

const niveles = data
.map(objeto => objeto.level)
.reduce((obj,iter) => {
    if (!obj[iter]) {
        obj[iter] = 1;
    }else{
        obj[iter] += 1; 
    }
    return obj;
},{})
console.log(niveles)



