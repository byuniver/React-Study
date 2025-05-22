console.log(1);

// js는 싱글 스레드지만 비동기가 가능한 이유는

// Web APIs를 이용해서 비동기 작업 처리
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
