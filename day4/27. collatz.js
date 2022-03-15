//https://programmers.co.kr/learn/courses/30/lessons/12943
//필요과정
//(숫자 짝홀 구분, /2, *3+1) cnt 확인, num==1 체크

function solution(num) {
  if (num == 1) {
    return 0;
  }
  let cnt = 0;
  for (let i = 0; i < 500; i++) {
    num % 2 == 0 ? (num /= 2) : (num = num * 3 + 1);
    cnt++;

    if (num === 1) {
      return cnt;
    }
  }
  if (num !== 1) {
    return -1;
  }
}
solution(6);

//풀이2
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
