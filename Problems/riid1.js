// andrea, maria, s 입력
// andrea maria  각각 뽑은 카드 숫자

function solution(andrea, maria, s) {
  let num = ["Even", "Odd"];
  let checkNum = num.indexOf(s);

  if (andrea[checkNum] > maria[checkNum]) {
    return "Andrea";
  } else if (andrea[checkNum] < maria[checkNum]) {
    return "Maria";
  } else {
    return "Tie";
  }
}

console.log(solution([1, 2, 3], [2, 1, 3], "Even"));
