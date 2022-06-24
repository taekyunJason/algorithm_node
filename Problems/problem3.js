//n명이 참가하고 토너먼트 형식으로 진행!
//1 ~ n명까지 배정 -> 1/2 3/4 ... n-1/n번 참가자끼리 게임

//1라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇전째 라운드에서 만날까?
//참가자수 n, 참가자 번호 a, 경쟁자 번호 b
//부전승은 발생하지 x

//a 와 b 참가자가 존재할때 서로의 라운드 번호가 같을때 만나게 됨!

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}
