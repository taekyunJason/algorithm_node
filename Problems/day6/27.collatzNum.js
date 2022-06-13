//https://programmers.co.kr/learn/courses/30/lessons/12943

function getCollatzNum(num) {
  let cnt = 0;
  while (num != 1 && cnt < 500) {
    //num이 1이 아니면서 횟수가 500미만인 경우 반복
    num % 2 == 0 ? (num /= 2) : (num = num * 3 + 1); //num이 짝수이면 2로 나누고, 홀수면 3곱해서 1더하기
    cnt++; //횟수 1씩 더하기
    // console.log(num, cnt);
  }
  return num == 1 ? cnt : -1; //num이 1이라면, 횟수 리턴하고 아니면 -1 리턴
}

console.log(getCollatzNum(6));
