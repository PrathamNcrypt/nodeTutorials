const fs = require("fs");


fs.writeFileSync("./fileHandling-nodeJS/text.txt", "Hey\n");
const result = fs.readFileSync("./fileHandling-nodeJS/name.txt", "utf-8");
console.log(result);


fs.appendFileSync("./fileHandling-nodeJS/text.txt",`${Date.now()} Hey There\n` );

const timestamp = 1770484098042;
const date = new Date(timestamp);

console.log(date.toString()); // Full readable string
console.log(date.toLocaleString()); // Local format (Day/Month/Year, Time)