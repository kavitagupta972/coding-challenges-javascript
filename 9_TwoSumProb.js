//this is the problem 
// of [2,7,11,15] , find the indexes for which sum is 9 in javascript with explanation

function twoSumProblem(arr, target) {
    var needed = 0;
    const arrMap = new Map();
    for(let i = 0; i< arr.length; i++){
        needed = target - arr[i];
        if(arrMap.has(needed)){
            return [arrMap.get(needed), i];
        }

        arrMap.set(arr[i], i);

    }

    return [0,0];
}

var arr = [2,6,8,7];
var sum = 9;

console.log(twoSumProblem(arr, sum));
