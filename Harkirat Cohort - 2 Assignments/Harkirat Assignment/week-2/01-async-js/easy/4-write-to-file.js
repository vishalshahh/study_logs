// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
 

const fs = require('fs')

fs.writeFile("data.txt", "I am a full stack developer ", 'utf-8', (err) => {
    if(err){
        console.error("Error writing to file: ", err)
        return
    }

    console.log("File written successfully")
})

// Synchronous code to simulate immediate execution
console.log("This log appears BEFORE file write (non-blocking)");

let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}
console.log("Expensive calculation done:", sum);
