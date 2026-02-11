var arr = [200,5,7,1,10, 11];

function findSecondLargestNumber(arr) {
   var max1 = 0;
   var max2 = 0;
   
   for(let i = 0; i<arr.length; i++) {
       if(max1 < arr[i]) {
           [max1, max2] = [arr[i], max1];
       } else if(max2 < arr[i]){
           max2 = arr[i];
       }
   }
   return max2;
}

console.log(findSecondLargestNumber(arr));