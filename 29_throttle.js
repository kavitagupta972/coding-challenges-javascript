//“Throttle ensures a function executes at most once within a specified time interval.
//It tracks the last execution time and only allows execution if enough time has passed since the previous call.”

function throttle(fn, delay = 300) {
    let lastExecutionTime = 0;
    let timer;

    return function (...args) {
        let context = this;
        let now = Date.now();

        if (now - lastExecutionTime >= delay) {
            lastExecutionTime = now;
            fn.apply(context, args);
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                lastExecutionTime = Date.now();
                fn.apply(context, args);
            }, delay - (now - lastExecutionTime));
        }
    };
}


const throttleFn = doSomeMagicThrottle(getData, 300);

throttleFn();