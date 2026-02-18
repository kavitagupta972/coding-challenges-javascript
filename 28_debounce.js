// Debounce ensures a function executes only after a certain delay has passed since the last time it was invoked.
// “Debounce ensures a function executes only 
// after a specified delay has passed since its last invocation. It’s commonly used for search inputs, resize events, and scroll handlers to avoid excessive function calls.”


function debounce(fn, delay = 300) {
    let timer;

    return function (...args) {
        const context = this;

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}


function getData() {
    console.log("API Call");
}

const debouncedFn = debounce(getData, 500);

window.addEventListener("input", debouncedFn);
// Now API call only happens after user stops typing for 500ms.

//=========================================
// function getData() {
// 	console.log("Get Data Called")
// }


// function doSomeMagic(getData, delay = 300){
// 	let timer;
// 	let args = arguments;
	
// 	return function() {
// 		let context = this;
// 		clearTimeout(timer);
// 		timer = setTimeout(function(){
// 			getData.apply(context, args);
// 		}, delay)
// 	}
// }

// const deBounce = doSomeMagic(getData, 300);