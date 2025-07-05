// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```
// After the program runs, the output should be
// ```
// hello world my name is raman
// ```

const fs = require("fs")

fs.readFile("data.txt", "utf-8", (err, data) => {
    if(err){
        console.error("Error reading file:", err)
        return
    }

      // Clean the content: remove extra spaces
      const cleaned = data.replace(/\s+/g, " ").trim()

      // Write it back to the same file
        fs.writeFile("data.txt", cleaned, "utf-8", (err) => {
            if(err){
                console.error("Error writing file:", err)
                return
            }

            console.log("File cleaned successfully")
            console.log(cleaned)
        })
})