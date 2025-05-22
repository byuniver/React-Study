// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// common js
// module.exports = {
//   add,
//   sub,
// };

// es module
export { add, sub };

// 혹은 아래와 같이
// export function sub(a, b) {
//   return a - b;
// }
