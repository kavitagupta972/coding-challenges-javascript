//Two Elements with Maximum Sum
//

function maxSum(arr) {
var max1 = arr[0], max2 = arr[0];
for(let i = 0;i < arr.length ; i++) {
    if(arr[i] > max1) {
        [max1, max2] = [arr[i], max1];
    } else if(arr[i] > max2){
        max2 = arr[i];
    }

}
return [max1, max2];


}

console.log(maxSum([20,30,40,50,5]));