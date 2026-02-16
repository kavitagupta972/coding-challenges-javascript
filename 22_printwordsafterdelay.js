// [ 'My', 'name', 'is', 'kavita' ]
// My
// name
// is
// kavita
//After delay of 1 second between each word. use settimeout , also try with promise and settimeout for delay

var str = "My Name is Kavita Gupta";

var strArr = str.split(" ");
console.log(strArr);

strArr.map( (item, index) => {
    setTimeout(()=>{
        console.log(item);
    }, 1000*index)
});



