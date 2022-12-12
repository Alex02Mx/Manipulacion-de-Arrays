const array = [1,2,1,2,4,4,2,2]

const objeto = array.reduce((acumulador, iterador) => {
    if (!acumulador[iterador]){
        acumulador[iterador] = 1
    }
    else{
        acumulador[iterador] += 1
    }
    return acumulador
        
    
}, {})
console.log(objeto)