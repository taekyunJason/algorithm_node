//https://programmers.co.kr/learn/courses/30/lessons/12947

function getHashadNum(num) {
  let sum = 0; //각 자리수 합 담을 변수
  let eNum = num; //받아온 변수를 저장할 변수
  while (num > 0) {
    //while문 안에 반복문을 돌릴 조건 걸어주기
    sum += num % 10; //sum에 나머지 누적하기
    num = Math.floor(num / 10); //num에 10으로 나눈 몫 저장하기
    console.log(sum, eNum);
  }
  return eNum % sum == 0 ? true : false;
}

console.log(getHashadNum(13));
