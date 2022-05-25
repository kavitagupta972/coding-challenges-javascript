/*
This problem contains to check if string is palndrome. 
*/

//First Way - using inbuilt functions
function palindromeWay1(str) {
    
    let reversed= str.split('').reverse().join('');
    if(reversed === str) return true;
    return false;
}

console.log(palindromeWay1("12321"));
console.log(palindromeWay1("sharetoolearn"));

//Second Way - not a best possible way because it is taking extra iterations.
function palindromeWay2(str){
    return str.split('').every((char, index) =>  char === str[str.length-index-1] );
}

console.log(palindromeWay2("12321"));
console.log(palindromeWay2("sharetoolearn"));

//Third Way - As of now, best possible way for me
function palindromeWay3(str){
    let strLength = str.length;
    let arr = str.split('');

    //loop in to half of the string length
    for(let i = 0; i < strLength/2 ; i++){
        if(str[i] !== str[strLength -i-1]) return false;
    }
    return true;
}

console.log(palindromeWay3("12321"));
console.log(palindromeWay3("sharetoolearn"));