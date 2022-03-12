//https://programmers.co.kr/learn/courses/30/lessons/12925

function strIntoInt(str) {
  console.log(str / 1); //str에 문자열 있으면 NaN 리턴(Not a Number)
}

strIntoInt("12345");

//풀이2
function solution(s) {
  var answer = parseInt(s); //정수 형변환 number()
  return answer;
}

//풀이3
function strToInt(str) {
  return +str;
}

//풀이4
function strToInt(str) {
  return str * 1;
}
