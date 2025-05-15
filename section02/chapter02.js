// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례

function printName(person) {
  //   if (!person) {
  //     console.log("person에 값이 없음");
  //     return;
  //   } 아래와 같이 간략하게 가능
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "홍길동" });
