const fs = require("fs")
fs.writeFileSync("test.txt","ใในใ")
console.log(fs.readFileSync("test.txt","utf8"));
