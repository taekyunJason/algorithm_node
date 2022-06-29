//자연수 n이 매개변수로 주어집니다.
//n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.

// 나머지가 1인 숫자 구하기 = firstNum
// 해당 숫자가 제곱수이면 제곱근 = secondNum

function solution(n) {
  let firstNum = 0;
  let secondNum = 0;

  firstNum = n - 1;
  if (Math.sqrt(firstNum) % 1 === 0) {
    secondNum = Math.sqrt(firstNum);
  }

  return Math.sqrt(firstNum) % 1 === 0 ? secondNum : firstNum;
}

//처음부터 answer에 +1 더해가면서 n을 나눠서 나머지가 1일때 해당 값을 리턴!
function solution2(n) {
  let answer = 1;
  while (n % answer !== 1) {
    answer++;
  }
  return answer;
}

console.log(solution2(10));
