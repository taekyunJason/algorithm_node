//https://programmers.co.kr/learn/courses/30/lessons/86051
//0-9까지 숫자중 없는 숫자 배열에서 확인, 해당 숫자 합

function sum(arr) {
  let sum = 0;
  return 45 - arr.reduce((acc, cur) => acc + cur, 0);
}
