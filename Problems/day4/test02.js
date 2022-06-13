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

//풀이3
function solution(month, day) {
  let answer = 0;

  let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = month - 1; i <= arr.length; i++) {
    answer += arr[i];
    if (answer >= day + 98) {
      month = i + 1;
      day = arr[i] - (answer - (day + 98));
      return `${month}월 ${day}일`;
    }
    if (i == 11) {
      i = 0;
    }
  }
}

console.log(solution(1, 18));

//풀이4
function solution(month, day) {
  let result = "";
  let days = 0;
  date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  month -= 1;
  while (days + date[month] < 98) {
    days += date[month++];
    month > 11 ? (month = 0) : {};
  }
  day += 98 - days;
  if (date[month] < day) day -= date[month++];
  result = month + 1 + "월 " + day + "일";
  return result;
}
console.log(solution(1, 18));
