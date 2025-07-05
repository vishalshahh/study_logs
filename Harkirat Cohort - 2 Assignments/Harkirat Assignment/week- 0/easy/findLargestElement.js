/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Step 1: Assume first number is the largest
    let largest = numbers[0];
  
    // Step 2: Loop through the rest of the array
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i]; // Update if current is larger
      }
    }
  
    return largest;
  }
  
  module.exports = findLargestElement;
  