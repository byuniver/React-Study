// 함수선언

function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  // let width = 10;
  // let height = 20;
  another();
  let area = width * height;

  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

// 호이스팅
// -> 끌어올리다 라는 뜻
