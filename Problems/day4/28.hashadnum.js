//https://programmers.co.kr/learn/courses/30/lessons/12947
//필요조건 : 하샤드수 = 각 자릿수의 합으로 숫자가 나누어 져야함.
// sum_Num = 각 자릿수 더하기=> 숫자를 문자열로/ 각 자리수 자르기/ 각 자리를 숫자로/ map으로 숫자배열 합치기 , (sum % sum_Num ===0) => return true

function hashadNum(num) {
  let arr = [];
  let numSum = 0;

  arr = num
    .toString()
    .split("")
    .map((n) => parseInt(n));
  numSum = arr.reduce((acc, cur) => acc + cur, 0);

  console.log(numSum);

  return num % numSum === 0 ? true : false;
}

hashadNum(10);

//풀이2
function Harshad(n) {
  return !(
    n %
    (n + "").split("").reduce(function (i, sum) {
      return +sum + +i;
    })
  );
}
