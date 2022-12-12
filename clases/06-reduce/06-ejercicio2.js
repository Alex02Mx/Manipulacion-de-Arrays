const array = [1,2,3,4,5];
const array2 = [];

function calcularSum (numbers) {
    if(numbers.length == 0){
        return 0
    }else{
        return numbers.reduce((add,num) => add += num);
    }
   
}
console.log(calcularSum(array))
