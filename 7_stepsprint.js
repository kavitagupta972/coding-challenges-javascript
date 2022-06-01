/*
Steps printing will be like 
'#   '   
'##  ' 
'### '
'####'

one can also use recursion for printing steps
*/

function steps(n){
    let steps = '';
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            steps += '#';
        }
        for(let k = n; k >i; k--) {
            steps += ' ';
        }
        steps += '\n'; 
    }
    return steps;
    
}

console.log(steps(4));