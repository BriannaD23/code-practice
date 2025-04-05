// Write a function that checks if a given string is a palindrome (reads the same backward as forward).


function isPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

  
  console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true  
  console.log(isPalindrome("racecar"));                         // true  
  console.log(isPalindrome("hello"));