//https://programmers.co.kr/learn/courses/30/lessons/12918

function strHandling(arr) {
  //'1e22' 지수형태 예외 처리 필요
  if (arr.length == 4 || arr.length == 6) {
    arr / 1 ? console.log("true") : console.log("false");
  } else {
    ("false");
  }
}

//올비른 풀이
function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

function s(arr) {
  arr / 1;
  console.log(arr);
}
s("1e22");

//참고사이트 : https://habitual-history.tistory.com/3
//정규표현식 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jeongju02&logNo=221517177533
