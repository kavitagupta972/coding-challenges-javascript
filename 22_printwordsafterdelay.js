// [ 'My', 'name', 'is', 'kavita' ]
// My
// name
// is
// kavita
//After delay of 1 second between each word. use settimeout , also try with promise and settimeout for delay
//WITHOUT PROMISE
var str = "My Name is Kavita Gupta";

var strArr = str.split(" ");
console.log(strArr);

strArr.map( (item, index) => {
    setTimeout(()=>{
        console.log(item);
    }, 1000*index)
});
//WITH PROMISE AND PROMISE CHAINING


// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// function printWords(str) {
//   const words = str.split(" ");

//   let promiseChain = Promise.resolve();

//   words.forEach((word) => {
//     promiseChain = promiseChain.then(() => {
//       console.log(word);
//       return delay(1000);
//     });
//   });

//   //return promiseChain;
// }

// printWords("Hello this is Kavita");

//============================================================
//MY VERSION OF WRITING CODE
var str = "Hello, My Name is Kavita Gupta";

var strArr = str.split(" ");
function delay(ms) {
        return new Promise(resolve => {
            setTimeout(resolve,  ms);
        })
    
    
}
var promiseChain = Promise.resolve();
strArr.forEach(str => {
     promiseChain = promiseChain.then(()=>{
        console.log(str);
        return delay(1000);
    })
})





