//5-c 6-b는 스위치
//2-b 3-a는 스위치
//3-b 4-a는 스위치

function solution(s) {
  // Write your code here
  console.log(s);
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "c" && arr[i + 1] === "b") {
      let temp = arr.splice(i, 1);
      arr.splice(i + 1, 0, temp[0]);
    }
    if (arr[i] === "b" && arr[i + 1] === "a") {
      let temp = arr.splice(i, 1);
      arr.splice(i + 1, 0, temp[0]);
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  // }
  let answer = arr.join("");
  return answer;
}

console.log(solution("ababbaab"));
