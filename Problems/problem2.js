//arr -> 0~9  연속으로 중복된 숫자는 순서를 유지하면서 하나만 남기고 제거
//연속적으로 나타나는 숫자 제거 => 스택!

function solution(arr) {
  let answer = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let top = answer[answer.length - 1];
    if (top !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
