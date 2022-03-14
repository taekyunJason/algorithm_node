function descending(num) {
  let strNum = num + "";
  let arr = strNum.split("");
  arr = arr.sort((a, b) => a - b);
  arr = arr.reverse();
  let str = arr.join("") * 1;

  console.log(str);
}

descending(118372);

//풀이2
function solution(n) {
  // 문자풀이
  return parseInt((n + "").split("").sort().reverse().join(""));
}

//풀이3
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}
