//https://programmers.co.kr/learn/courses/30/lessons/86051

function addShadowNum(arr) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    arr.includes(i) ? (sum += 0) : (sum += i); //arr.includes(i)
  } //arr 안에 i 요소가 있는지 확인해서 T/F 반환
  console.log(sum);
}

addShadowNum([6, 2, 3, 4, 5, 0]);

//풀이2
function solution(num) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!num.includes(i)) answer += i;
  }
  return answer;
}

//풀이3
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
//arr.reduce(callback, initialValue)
//((누적값,현재값) => 누적+현재값, 초기값:0)

//풀이4
function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    sum += signs[i] ? absolutes[i] * 1 : absolutes[i] * -1;
  }
  return sum;
}

//참고사이트 : https://blog.naver.com/PostView.nhn?blogId=wideeyed&logNo=221877924629
//참고사이트 : https://miiingo.tistory.com/365
