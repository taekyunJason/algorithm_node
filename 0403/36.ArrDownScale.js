//https://programmers.co.kr/learn/courses/30/lessons/12917
//문자열에 나타나는 문자를 큰것부터 작은 순으로 리턴

function arrDownScale(str) {
  return str.split("").sort().reverse().join("");
}

console.log(arrDownScale("Zbcdefg"));
