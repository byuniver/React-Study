// common js
// const moduleData = require("./math");

// es module
// import { add, sub } from "./math.js";
// import multiply from "./math.js";
// 이름 변경도 가능
import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(multiply(1, 2));

import randomColor from "randomcolor";
const color = randomColor();

console.log(color);
