//https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1); //splice(시작점, 자를 갯수)
  if (arr.length < 1) return [-1];
  return arr;
}

console.log(solution([4, 3, 5, 2]));
