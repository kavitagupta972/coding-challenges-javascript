// The "Move Zeroes" problem is a common Data Structures and Algorithms (DSA) question that asks you to rearrange an array so all zeros are at the end, while maintaining the relative order of the non-zero elements, and doing so in-place (without using extra space). 
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0] 
console.log("starting logic");
function moveZero(arr) {
var insertPos = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] !== 0){
            [arr[insertPos], arr[i]]=  [arr[i], arr[insertPos]];
            insertPos++;
        }

    }

    return arr;

}

console.log("moving zero", moveZero([1,0,3,0,6]));

console.log("moving zero", moveZero([0, 1, 0, 3, 0]));
