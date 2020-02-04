import fs from "fs";

fs.writeFileSync("./aaaa", "aaa");
const data = fs.readFileSync("./aaaa", "utf-8");
console.log(data);