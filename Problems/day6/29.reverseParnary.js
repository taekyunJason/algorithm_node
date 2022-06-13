//https://programmers.co.kr/learn/courses/30/lessons/68935

function reverse(num) {
  return parseInt(num.toString(3).split("").reverse().join(""), 3);
}

console.log(reverse(125));

//진법 바꾸기
//10->16진수
//num.toString(16)

//16->2진수 [16-10-2 순서로 변환]
//parseInt(arr,16).toString(2)

//line4 -> int - str - arr - arr - str - int
