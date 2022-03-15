//https://programmers.co.kr/learn/courses/30/lessons/12948
//*로 전화번호 뒷4자리 앞까지 반복, 번호에서 뒷4자리만 잘라서 가져오기, 합치기

function blockPhoneNum(num) {
  return "*".repeat(num.length - 4) + num.slice(-4);
}
