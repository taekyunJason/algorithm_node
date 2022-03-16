//https://programmers.co.kr/learn/courses/30/lessons/12934
//num이 제곱근인지 판단해서 제곱수라면 (제곱근+1)제곱/ -1 리턴

function getSqrt(num) {}

function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    // Number.isinteger 정수인지 판별해주는 함수 , sqrt가 정수인지 확인
    return Math.pow(sqrt + 1, 2); // (sqrt + 1) ** 2  이것도 동일한 식
  } else {
    return -1;
  }
  // return Number.isInteger(sqrt) ? Math.pow(sqrt +1, 2) : -1;   // 위에 if문을 한줄로 요약
}
console.log(solution(121));
console.log(solution(3));

//정수 판별 (num%1===0?)
