//https://programmers.co.kr/learn/courses/30/lessons/12948

function blockPhoneNum(str) {
  let star = "*".repeat(str.length - 4);
  let restNum = str.slice(-4);
  let totalNum = star + restNum;

  console.log(totalNum);
}

blockPhoneNum("0123456789");

//slice() : https://im-developer.tistory.com/103
