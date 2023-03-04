const fs = require("fs")
fs.writeFileSync("test.txt","テスト")
console.log(fs.readFileSync("test.txt","utf8"));
