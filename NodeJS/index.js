
// const fs = require("fs"); //file system module

// fs.writeFile("hello.txt", "Hello, this is a test file!", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });


// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//   } else {
//     console.log("File contents:", data);
//   }
// }); 


var generateName = require('sillyname');

var name = generateName();
console.log("Generated silly name:", name); 
