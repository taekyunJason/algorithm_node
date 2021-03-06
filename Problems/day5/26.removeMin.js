//https://programmers.co.kr/learn/courses/30/lessons/12935
//배열에서 min값 구하기 - 배열에서 min 값 제거하여 리턴/ 빈배열은 -1리턴

// function removeMin(arr) {
//   let min = 0;
//   let answer = [];

//   arr.sort((a, b) => b - a);
//   if (arr.length === 1) {
//     answer.push(-1);
//     return answer;
//   }
//   min = Math.min(...arr);
//   answer = arr.filter((num) => num > min);
//   return answer;
// }
// console.log(removeMin([10]));
//Math.min값 가져올때는 ()에 배열의 원소를 보내야 함!
//배열에서 min값 제거
//특정값 삭제 방법

//풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

console.log(solution([10]));
