function isValid(s) {
 let stack = [];

 for(let char of s){
    if(char === '(' || char === "{" || char === "["){
        stack.push(char);
    } else {
        let last = stack.pop();

        if(
        (char === ')' && last !== '(') ||
        (char === '}' && last !== '{') ||
        (char === ']' && last !== '[')
        )
        return true
    }
 }
}

console.log(isValid("()")); // Expected Output: true
console.log(isValid("()[]{}")); // Expected Output: true
console.log(isValid("(]")); // Expected Output: false
console.log(isValid("([)]")); // Expected Output: false
console.log(isValid("{[]}")); // Expected Output: true
