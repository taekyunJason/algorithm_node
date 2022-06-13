//https://programmers.co.kr/learn/courses/30/lessons/12915
//str, 정수가 주어질때 각 문자열의 인덱스 n번째 글자를 기준으로 str을 정렬하기

function arrayStr(str, n) {
  str.sort((a, b) => {
    let first = a[n];
    let second = b[n];

    if (first === second) {
      return (a > b) - (b > a);
    } else {
      return (first > second) - (second > first);
    }
  });
  return str;
}

console.log(arrayStr(["sun", "bed", "car"]), 1);

//풀이2
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
