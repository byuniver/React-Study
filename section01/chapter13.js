// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  // console.log("i am sub");
});

// 2. 콜백함수의 활용

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// repeat(5);
// repeatDouble(5);

// 위와 같이 불 필요한 작업을 방지 하기 위해

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
