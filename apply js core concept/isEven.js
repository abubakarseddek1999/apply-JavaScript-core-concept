function isEven(number){
    const remainder = number % 2;
   
    if(remainder === 0){
        // console.log('the number is even')
        return true;
    }
    else{
        // console.log('the number is odd')
        return false;
    }
}
const myNumberIsEven = isEven(303)
console.log(myNumberIsEven)
const herNumberIsEven = isEven(28)
console.log(herNumberIsEven)
