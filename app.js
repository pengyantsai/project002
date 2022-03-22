let name = "daniel";

const gretting = require("./gretting");
const path = require("path");
let sayhi = () => {
    console.log("Hello "+ name);
};

console.log(path.join(__dirname,"try.js"))
sayhi();
gretting.morning(name);
gretting.night(name);
console.log(__filename);
console.log(__dirname);