// “For the first problem, my understanding is that we’ll receive a dynamic array of numbers, and we need to filter out all the prime numbers from that array.
// remove duplicate as well if there is any in array of input
// So my approach would be:

// Iterate through each number in the array.
// For every number, check whether it is prime or not.
// A number is prime if it is greater than 1 and divisible only by 1 and itself.
// To optimize, instead of checking till n-1, I would check divisibility only till √n.

// For example, if the input is from 1 to 46, the output would be:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43.