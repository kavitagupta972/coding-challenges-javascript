/*
The FizzBuzz problem is a classic test given in coding interviews.
 The task is simple: Print integers 1 to N,
  but print “Fizz” if an integer is divisible by 3, 
 “Buzz” if an integer is divisible by 5, and 
 “FizzBuzz” if an integer is divisible by both 3 and 5. 
 */


function fizzbuzz(n) {

    for(let i = 1; i <= n; i++) {
        if(i%15 === 0) {
            console.log("FizzBuzz");
        } else if(i%3 === 0) {
            console.log("Fizz");
        } else if(i%5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(16);