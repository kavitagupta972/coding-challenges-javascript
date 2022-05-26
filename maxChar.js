/*
Given a string, finds the character which is maximum used in string 
or repeated maximum time in a given string

e.g. maxChar("abcccccd") ==> 'c'
 maxChar("111122334448888888") ==> '8'

*/

/*
Solution : 
1. First we will create the map of characters with number of occurences
2. Iterate over map to find the character with maximum occurences
*/
function maxChar(str){

    let charMap = {};
    let max = 0, maxChar = '';
    for(let ch of str){
        if(charMap[ch]){   // charMap[ch] = charMap[ch]+1 || 1; replacement of if-else
            charMap[ch]++;
        } else {
            charMap[ch] = 1;
        }

    }
    console.log(charMap);
    for(let ch in charMap){
        if(charMap[ch] > max){
            max = charMap[ch];
            maxChar = ch;
        }
    }

    return maxChar;

}
console.log(maxChar("abcccccd"));
console.log(maxChar("111122334448888888"));