/**
 * A friend of Alex has gifted them a movie collection, and 
 * Alex is excited to watch them all as quickly as possible.
 *  The duration of the movies is given in array durations[n],
 *  where n is the number of movies, and each movie duration lies between 1.01 and 3.00 units of time 
 * (up to two decimal places). Every day, Alex wants to spend no more than 3.00 units of time watching the movies
 *  but also wants to complete the movies in the least number of days possible. Alex does not leave a movie in between. 
 * That is, if Alex has picked up a movie, Alex watches the complete movie on the same day. Find the minimum number of days needed to watch all the movies. 
 * This is a classic greedy + two-pointer problem (very similar to the “boats to save people” pattern).
* [1.25, 2.75, 1.50, 1.50, 2.00, 1.00], [1.50, 1.50, 1.50, 1.50], [1.01, 1.99, 2.00, 1.50], [2.70, 1.30, 2.20, 0.80], [2.50], [3.00, 3.00, 3.00] 
*/

const findDays = (movies)=>{
    if (movies.length == 1) return 1;
    movies.sort((a,b) => a - b);
    var days = 0, j = 0, k = movies.length-1;
   while(j<=k) {
        if(movies[j]+movies[k] <= 300){
            j++;
            k--;
        } else {
            k--;
        }
        days++;
    }
    return days; 
}

// console.log(findDays([1.25, 2.75, 1.50, 1.50, 2.00, 1.00]));
// console.log(findDays([1.01, 1.02, 1.03, 1.04]));
// console.log(findDays([1.01]));
console.log(findDays([2.99, 2.98, 2.97]));
console.log(findDays([1.40, 1.60, 1.50, 1.50]));
console.log(findDays([1.50, 1.50, 1.50, 1.50]));

