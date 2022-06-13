//https://programmers.co.kr/learn/courses/30/lessons/81301
//문자열에서 영어로 된 단어를 숫자로 바꿔서 숫자로 리턴

function changeStr(str) {
  let engToNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = str;

  for (let i = 0; i < engToNum.length; i++) {
    let arr = answer.split(engToNum[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}

console.log(changeStr("one4seveneight"));
