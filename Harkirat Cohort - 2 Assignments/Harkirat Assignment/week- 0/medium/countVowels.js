/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0; // to keep track of vowel count
  const vowels = 'aeiouAEIOU'; // all vowels

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++; // increment if character is a vowel
    }
  }

  return count;
}

module.exports = countVowels;
