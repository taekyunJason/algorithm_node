//https://programmers.co.kr/learn/courses/30/lessons/12912

function sumAWithB(num1, num2) {
  console.log(((num1 + num2) * (Math.abs(num1 - num2) + 1)) / 2);
}

sumAWithB(1, 5);

//풀이1
function solution(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }
  return sum;
}

//참고 사이트 : https://mathbang.net/609
