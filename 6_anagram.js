//Anagrams
//There are two approaches that i will use to check if two strings are anagram or not

//Way1

function anagramInbuilt(str1, str2) {

    if(str1.length != str2.length) return false;
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    if(sortedStr1 === sortedStr2) return true;
    return false;

}

console.log(anagramInbuilt("hello", "elolhk"));
console.log(anagramInbuilt("hello", "elolh"));

//Way2
function anagram(str1, str2) {
    let charObj1 = charMap(str1);
    let charObj2 = charMap(str2);
    if(Object.keys(charObj1).length != Object.keys(charObj2).length) return false;
    for(let key in charObj1) {
        if( charObj1[key] != charObj2[key]) return false;
    }
   return true;
}
function charMap(str) {
   let charObj = {};
   for(let ch of str) {
       charObj[ch] = charObj[ch] + 1 || 1;
   }
   
   return charObj;
}
console.log(anagram("hello", "elolhk"));
console.log(anagram("hello", "elolh"));