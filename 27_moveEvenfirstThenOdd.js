// [3,1,2,4]  => [2,4,1,3]

const arr = [3, 1, 2, 4];

let i = 0;

for (let j = 0; j < arr.length; j++) {
  if (arr[j] % 2 === 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
  }
}

console.log(arr); 

// const arr = [3, 1, 2, 4];

// const evens = [];
// const odds = [];

// for (let num of arr) {
//   if (num % 2 === 0) {
//     evens.push(num);
//   } else {
//     odds.push(num);
//   }
// }

// const result = [...evens, ...odds];

// console.log(result); // [2, 4, 1, 3]

// const arr = [3, 1, 2, 4];

// const result = [
//   ...arr.filter(num => num % 2 === 0),
//   ...arr.filter(num => num % 2 !== 0)
// ];

// console.log(result); // [2, 4, 1, 3]