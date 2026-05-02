/**
 * Question 
A grasshopper is jumping on a numbered staircase where the bottom stair is numbered 1, the next is 2, and so on. The grasshopper can jump up or down according to an array of jump values.
For each jump in the array:
  If jumps[il> 0, the grasshopper jumps jumps/i steps up.
  If jumps[il < 0, the grasshopper jumps |jumpsli]| steps down.
Find the lowest possible stair number (startingStair) where the grasshopper can begin and remain on the staircase (stair number ≥ 1) throughout all jumps.
Example
jumps = [1, -4, -2, 3]
If startingStair = 6:

  Start at stair 6

  Jump 1 step up to stair 7

  Jump 4 steps down to stair 3

  Jump 2 steps down to stair 1

  Jump 3 steps up to stair 4

 */

//   var jumps = [1, -4, -2, 3];
  var jumps = [-1, -2, -3, -4];//[2, 3, 1, 5];
  function findStartingPoint(jumps){

        if(jumps.length == 1){
            return jumps[0];
        } else {
            let sum = 0;
            let lowestPoint = 0;
            for(let i = 0; i<jumps.length; i++){
                sum+= jumps[i];
                if(sum<lowestPoint) {
                    lowestPoint = sum;
                }
            }
            return 1 - lowestPoint;
        }
  }

  console.log(findStartingPoint(jumps));