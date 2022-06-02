/*

Given an integer, return an integer which is reverse ordering of numbers.

reverseInt(45) === 54
reverseInt(569) === 965
reverseInt(-34) === -43
reverseInt(-90) === -9

*/

function reverseInt(n){

    let reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(45));
console.log(reverseInt(569));
console.log(reverseInt(-43));
console.log(reverseInt(-9));