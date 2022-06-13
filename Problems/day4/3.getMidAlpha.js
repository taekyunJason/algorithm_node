//https://programmers.co.kr/learn/courses/30/lessons/12903
//글자개수 파악, 짝수-> 가운데 2개, 홀수-> 가운데 1개 리턴

function getMidWord(str) {
  let word = "";
  let len = str.length;
  len % 2 == 0
    ? (word = str[str.length / 2 - 1] + str[str.length / 2])
    : (word = str[parseInt(str.length / 2)]);
  console.log(word);
}

getMidWord("12345");

function solution(str) {
  let word = "";
  str.length % 2 === 0
    ? (word = str[str.length / 2 - 1] + str[str.length / 2])
    : (word = str[parseInt(str.length / 2)]);
  return word;
}
