// “Yes, got it. So both problems are independent and we can use the same input array for both.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]
// For the second problem, my understanding is:

// Every number in the array can act as a target.
// For each target number, we need to find all possible combinations of numbers from the same array whose sum equals that target.
// The result should be stored in an object where:
// key = target number
// value = array of combinations

// For example:

// 46: [
//   [1, 45],
//   [1, 20, 3, 22]
// ]