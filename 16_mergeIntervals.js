// Merge Intervals
// 🔹 Problem Statement
// Given an array of intervals:
// [[start1, end1], [start2, end2], ...]
// Merge all overlapping intervals and return the merged result.
// 🔎 Example
// Input:
// [[1,3],[2,6],[8,10],[15,18]]
// Output:
// [[1,6],[8,10],[15,18]]
// Because:
// [1,3] and [2,6] overlap → merged into [1,6]
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];

        // If overlapping
        if (current[0] <= prev[1]) {
            // Merge
            prev[1] = Math.max(prev[1], current[1]);
        } else {
            // No overlap
            result.push(prev);
            prev = current;
        }
    }

    // Push the last interval
    result.push(prev);

    return result;
}
