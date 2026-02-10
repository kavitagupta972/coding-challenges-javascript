//Two Elements with Maximum Difference

function maxDiff(arr) {
var min=arr[0], max=arr[0];

for(let i = 0; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            } else if(arr[i] > max){
                max = arr[i]
            }
}
return [min, max];


}

console.log(maxDiff([1,2,3,14,5,6,7,9,10]));