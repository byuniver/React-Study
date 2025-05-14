// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// console.log(1 * "hello"); // 결과 NaN (Not a Number)

// 2. String Type
let myName = "홍길동";
let MyLocation = "강동";
let introduce = myName + MyLocation;

console.log(introduce);

let introduceText = `${myName}은 ${MyLocation}에 거주합니다.`; // 백틱 ${text} text안에 동적 변수 삽입 가능
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
