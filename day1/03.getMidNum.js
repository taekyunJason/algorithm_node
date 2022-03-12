//https://programmers.co.kr/learn/courses/30/lessons/12903

function getMidStr(str) {
  let midStr = "";
  let len = str.length;
  if (len % 2 == 0) {
    midStr = str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    midStr = str[Math.floor(str.length / 2)];
  }
  console.log(midStr);
}

getMidStr("12345");

//.concat() => 문자열/배열 합치기
//Math.floor 반내림
//parseInt 정수 변환

//풀이2
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//풀이3
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

//참고 사이트 : https://hianna.tistory.com/446
