// 1*2*3*4*5*6*7
/* function multiplicationNumber(number){
    let result =1;
    for(let i =1; i <= 7; i++){
        result = result *i;
    }
    return result;




}
console.log(multiplicationNumber(7)) */


// 3! = 3*2*1..................
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;

    }
    return result;


}
const result = factorial(3);
console.log(result);

// 5!...............................
function names(params) {
    let result = 1;
    for (let i = 1; i <= params; i++) {
        result = result * i

    }
    return result

}
console.log(names(5));
// 8!........................
function factorial(number) {
    let result = 1
    for (let i = 1; i <= number; i++) {
        result = result * i;

    }
    return result;

}
console.log(factorial(8))