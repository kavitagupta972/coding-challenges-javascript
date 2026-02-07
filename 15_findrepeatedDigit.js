// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.
// Input: nums = [1,3,4,2,2]
// Output: 2
// Input: nums = [3,1,3,4,2]
// Output: 3
// Input: nums = [3,3,3,3,3]
// Output: 3
// https://www.geeksforgeeks.org/dsa/find-repetitive-element-1-n-1/
console.log("starting programme");
var iterations = 0;
 function findRepeatedDigit (arr) {
    iterations = 0;
    var items = new Set();
    for(let num of arr){
        iterations++;
        if(items.has(num)) {
            return num;
        }
        items.add(num);
    }

 }

 console.log(findRepeatedDigit([1,3,4,2,2]));
 console.log('number of iterations ', iterations);
 console.log(findRepeatedDigit([3,1,6,4,6]));
 console.log('number of iterations ', iterations);
 console.log(findRepeatedDigit([3,3,3,3,3]));

 console.log('number of iterations ', iterations);