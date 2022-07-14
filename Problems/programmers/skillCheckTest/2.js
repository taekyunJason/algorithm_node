//정수 n에 대해 해당 값이 제곱수이면 해당 제곱근 리턴/ 아니면 -1 리턴

function solution(n) {
  let answer = 0;

  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    answer = Math.pow(sqrt + 1, 2);
  } else {
    answer = -1;
  }

  return answer;
}

console.log(solution(121));
