function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let cleanedStr = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < cleanedStr.length; i++) {
        if (vowels.includes(cleanedStr[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello"));   // Logs each step, should return 2
console.log(countVowels("rhythm"));  // Logs each step, should return 0
console.log(countVowels("AEIOU"));
