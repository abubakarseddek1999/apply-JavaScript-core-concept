function isLeapYear (year){
    const remainder =year % 4;
    if ( remainder ===0){
        // console.log('leap year')
        return true;
    }
    else{
        // console.log('not leep year')
        return false;
    }
}
const isMyLeapYear = isLeapYear(1960)
console.log('my year:', isMyLeapYear)