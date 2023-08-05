function getSumOfArray(numbers){
    let sum =0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index,element,sum);
    }
    return sum;
}
// .......................................................
function myOddNunbersOfArray(numbers){
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const index =i;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index, element)
            oddNumbers.push(element);
        }
      
        
    }
    return oddNumbers;
}


const myNunbers =[12, 65, 45, 78, 32, 45, 91 ];
const oddNumbers = myOddNunbersOfArray(myNunbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfArray(myNunbers);
console.log('odd number sum', oddNumberSum)