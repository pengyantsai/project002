let name = "daniel";

let try1 = require("./try1");

let try2 = require("./try2");
let sayhi = () => {
    console.log("Hello "+ name);
};

sayhi();
try1.morining(name);
try2.night(name);
console.log(__filename);
console.log(__dirname);