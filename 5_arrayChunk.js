/*
Given an array and chunk size. Divide the array into subarray with given size.
examples :

//chunk([1, 2, 3, 4, 5, 6], 2)
//Output will be [[1, 2], [3, 4], [5, 6]]

chunk([1, 2, 3, 4, 5], 3)
//Output will be [[1, 2, 3], [4, 5]]

// chunk([1, 2, 3, 4, 5], 2)
//Output will be [[ 1, 2], [3, 4], [5]]

// chunk([1, 2, 3, 4, 5], 10)
//Output will be [[ 1, 2, 3, 4, 5]]
*/
function chunkSlice(arr, size) {
    let chunkedArr = [];
    let i =0;
    while(i < arr.length) {
        chunkedArr.push(arr.slice(i, i+size));
        i = i+size;
    }
    console.log(chunkedArr);
}
chunkSlice([1, 2, 3, 4, 5], 2);
chunkSlice([1, 2, 3, 4, 5], 10);
chunkSlice([1, 2, 3, 4, 5, 6], 2);
chunkSlice([1, 2, 3, 4, 5], 3);

function chunk(arr, size) {
    let chunkedArr = [];
    for(let element of arr) {
        const last = chunkedArr[chunkedArr.length - 1];
        if( last === undefined || last.length === size){
            chunkedArr.push([element]);
        } else {
            last.push(element);
        }
    }
    console.log(chunkedArr);
}
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5], 10);
chunk([1, 2, 3, 4, 5, 6], 2);
chunk([1, 2, 3, 4, 5], 3);