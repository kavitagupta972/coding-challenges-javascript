//dont use third variable strings can not mutate. Since, they are immutable in nature


// var str = "Hello, My Name is Kavita Gupta";
var str = "Kavita"
var str1 = str.split("");
var i = 0; var j = str1.length-1;
while(i<j){
   
   [str1[i], str1[j]] = [str1[j], str1[i]] ;
   i++;
   j--;
}

console.log(str1.join(""));