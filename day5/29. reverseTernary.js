//https://programmers.co.kr/learn/courses/30/lessons/68935
//파라미터를 3진법으로 변환 -> 뒤집기 -> 10진법 치환 => 다시 풀기

function reverse(num) {
  return parseInt(num.toString(3).split("").reverse().join(""), 3);
}

console.log(reverse(125));

// //풀이2
// function solution(n) {
//   return parseInt(n.toString(3).split("").reverse().join(""), 3);
// }

// //풀이3
// function solution(n) {
//   n = n.toString(3).split("").reverse().join("");
//   return parseInt(n, 3);
// }

// //풀이4
// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
// };
