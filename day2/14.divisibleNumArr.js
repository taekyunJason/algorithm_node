//https://programmers.co.kr/learn/courses/30/lessons/12910

function divisible(arr, div) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % div == 0 ? answer.push(arr[i]) : answer;
  }
  answer.length != 0 ? answer.sort((a, b) => a - b) : answer.push(-1); //sort()만 사용하면 ASCII 문자순서로 정렬되어서 숫자크기와 다름
  console.log(answer);
}

divisible([1, 10, 5], 5);

//오름차순 정렬
//arr.sort((a,b)=>a-b)   b가 더 클때 음수가 나옴,

//내림차순 정렬
//arr.sort((a,b)=>b-a)
