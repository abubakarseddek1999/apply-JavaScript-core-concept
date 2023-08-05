function fectorial(number) {
    let result =1;
    for (let i = number; i >= 1; i--) {
        result =result *i;
        // console.log(i)
      
        
    }
    return result;
}
const number = 9;
const fact = fectorial(number);
console.log(number,fact);