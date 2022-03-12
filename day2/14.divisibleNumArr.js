//https://programmers.co.kr/learn/courses/30/lessons/12910

function divisible(arr, div) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % div == 0 ? answer.push(arr[i]) : answer;
  }
  answer != [] ? answer.sort() : answer.unshift(-1);
  console.log(answer);
}

divisible([3, 2, 6], 10);
