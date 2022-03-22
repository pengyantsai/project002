let name = "daniel";

let gretting = require("./gretting");

let sayhi = () => {
    console.log("Hello "+ name);
};

sayhi();
gretting.morning(name);
gretting.night(name);
console.log(__filename);
console.log(__dirname);