/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) { // Remove spaces and convert to lowercase for case-insensitive comparison
    const normalize = str => str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // If lengths differ after normalization, not anagrams
    if (normalizedStr1.length !== normalizedStr2.length) 
        return false;
    

    // Sort and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
