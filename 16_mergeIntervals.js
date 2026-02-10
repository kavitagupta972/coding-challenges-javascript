// Merge Intervals
// Merge all overlapping intervals and return the merged result.
// 🔎 Example
// Input:
// [[1,3],[2,6],[8,10],[15,18]]
// Output:
// [[1,6],[8,10],[15,18]]
// Because:
// [1,3] and [2,6] overlap → merged into [1,6]

function mergeIntervals(intervals) {
    if(intervals.length <=1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for(let interval of intervals) {
        const last = result[result.length-1];
        if(interval[0] <= last[1]){
            last[1] = Math.max(interval[1], last[1]);
        } else{
            result.push(interval)
        }

    }
    return result;

}



console.log(mergeIntervals([[1,3],[8,10],[2,4],[15,18]]));
console.log(mergeIntervals([[4,5], [2,4]]));
console.log(mergeIntervals([[2,4]]));



// function mergeIntervals(intervals) {
//     if (intervals.length <= 1) return intervals;

//     // Step 1: Sort intervals by start time
//     intervals.sort((a, b) => a[0] - b[0]);

//     let result = [];
//     let prev = intervals[0];

//     for (let i = 1; i < intervals.length; i++) {
//         let current = intervals[i];

//         // If overlapping
//         if (current[0] <= prev[1]) {
//             // Merge
//             prev[1] = Math.max(prev[1], current[1]);
//         } else {
//             // No overlap
//             result.push(prev);
//             prev = current;
//         }
//     }

//     // Push the last interval
//     result.push(prev);

//     return result;
// }