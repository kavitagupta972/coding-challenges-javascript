Plus Minus Expression
Given a positive integer num consisting of one or more digits, insert either a '+' or '-' operator between every pair of adjacent digits.
Determine whether it is possible to form an expression whose value is exactly 0.
If multiple valid expressions evaluate to 0, return the sequence of operators that contains the maximum number of minus (-) signs.
If no such expression exists, return "not possible".
  input : 35132 , output : -++-, input: 199, output : not possible
function PlusMinus(num) {
  const digits = String(num).split('').map(Number);

  let result = null;
  let maxMinusCount = -1;
  
function backtrack(index, total, signs) {
    if (index === digits.length) {
        if (total === 0) {
            const minusCount =
                signs.split('').filter(ch => ch === '-').length;

            if (minusCount > maxMinusCount) {
                maxMinusCount = minusCount;
                result = signs;
            }
        }
        return;
    }

    // +
    backtrack(
        index + 1,
        total + digits[index],
        signs + '+'
    );

    // -
    backtrack(
        index + 1,
        total - digits[index],
        signs + '-'
    );
}
}

onsole.log(PlusMinus(35132)); // -++-
console.log(PlusMinus(26712)); // -+--
console.log(PlusMinus(199));   // not possible
