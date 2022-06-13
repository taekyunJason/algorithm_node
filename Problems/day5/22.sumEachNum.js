//https://programmers.co.kr/learn/courses/30/lessons/12931
//자연수를 10을 나눈 나머지 합하기

function sumEachNum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor((num /= 10));
    // console.log(sum, num);
  }
  return sum;
}

console.log(sumEachNum(123));

//풀이2
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
