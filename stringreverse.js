/*
This problem contains string reversal. 
*/

//First Way 
function inbuiltReverse(str) {
    
    return str.split('').reverse().join('');
    console.log("Reveresed ");
}

console.log(inbuiltReverse("coding challenge"));
console.log(inbuiltReverse("sharetoolearn"));
console.log(inbuiltReverse("1234"));

//Second Way
function concatReverse(str){
    let reversed = '';
    
    for(let ch of str) {
        reversed = ch+reversed;
    }
    
    return reversed;
}


console.log(concatReverse("coding challenge"));
console.log(concatReverse("sharetoolearn"));
console.log(concatReverse("1234"));