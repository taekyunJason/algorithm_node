//항해 수료 일자 리턴
//시작한 날부터 98일 이후에 수료

function solution(m, d) {
  let result = new Date(2022, m - 1, d);
  result.setDate(result.getDate() + 98);
  let mon = result.getMonth() + 1;
  let day = result.getDate();

  return mon + "월 " + day + "일";
}
console.log(solution(1, 18));

//풀이2
function solution(month, day) {
  let theday = "";
  theday = new Date(2022, month - 1, day);

  let answer = new Date(theday.setDate(theday.getDate() + 98));
  let mymonth = answer.getMonth() + 1;
  let myday = answer.getDate();

  console.log(answer);
  let final_day = mymonth + "월 " + myday + "일";

  return `"${final_day}"`;
}
console.log(solution(1, 18));
