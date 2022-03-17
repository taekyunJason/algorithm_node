//https://programmers.co.kr/learn/courses/30/lessons/12906

function noMoreSameNum(arr) {
  let answer = [arr[0]]; //배열의 1번 인덱스 값을 다른 변수에 저장

  for (let i = 1; i < arr.length; i++) {
    //
    let difArr = answer[answer.length - 1];
    if (difArr != arr[i]) {
      answer.push(arr[i]);
    }
    console.log(answer);
  }

  return answer;
}

console.log(noMoreSameNum([4, 4, 4, 3, 3]));

//filter -> 배열 안에서 특정 조건 설정해서, true가 리턴되는 요소만 새로 배열 구성
//filter인덱스로 구분하는 법
//

// function solution(arr) {         //해결하기
//   var answer = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.lenght; j++) {
//       if (arr[i] !== arr[j]) {
//         answer.push(arr[j]);
//       }
//     }
//   }
//   console.log(answer);
//   return answer;
// }
