// Given a string s containing three types of brackets {}, () and []. Determine whether the Expression are balanced or not.
// An expression is balanced if each opening bracket has a corresponding closing bracket of the same type, the pairs are properly ordered and no bracket closes before its matching opening bracket.

// Balanced: "[()()]{}" → every opening bracket is closed in the correct order.
// Not balanced: "([{]})" → the ']' closes before the matching '{' is closed, breaking the nesting rule.
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        // If closing bracket
        if (map[char]) {
            const top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        } else {
            // Opening bracket
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValid("[{}]"));

console.log(isValid("[{}"));


function findValidParanthesis(str) {

    const stack = [];
    const map = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };

    for(let char of str) {

        if(map[char]) {
            const top = stack.pop();
            if(top !== map[char]){
                return false;
            }

        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(findValidParanthesis("[()()]{}"));
console.log(findValidParanthesis("([{]})"));

console.log(findValidParanthesis("()"));