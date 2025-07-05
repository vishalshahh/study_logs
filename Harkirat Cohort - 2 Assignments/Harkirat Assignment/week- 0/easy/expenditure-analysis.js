/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Step 1: Create an empty array to store final results
  const result = [];

  // Step 2: Loop through each transaction
  for (let i = 0; i < transactions.length; i++) {
    const current = transactions[i]; // current transaction
    let found = false; // flag to check if category already exists

    // Step 3: Check if this category already exists in result array
    for (let j = 0; j < result.length; j++) {
      if (result[j].category === current.category) {
        result[j].totalSpent += current.price; // add to total
        found = true;
        break;
      }
    }

    // Step 4: If category not found, add new entry
    if (!found) {
      result.push({
        category: current.category,
        totalSpent: current.price,
      });
    }
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
