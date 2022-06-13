//https://programmers.co.kr/learn/courses/30/lessons/12901

function returnDayName(m, d) {
  let answer = "";
  let monCnt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayName = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let totalDayCnt = 0;

  for (let i = 1; i < m; i++) {
    totalDayCnt += monCnt[i - 1];
    console.log(totalDayCnt);
  }
  totalDayCnt += d - 1;
  answer = dayName[totalDayCnt % 7];

  console.log(answer);
}

returnDayName(5, 24);

// //풀이2
// function solution(a, b) {
//   const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

//   let days = b;
//   for (let i = 0; i < a - 1; i++) days += monthDay[i];

//   return weekDay[days % 7];
// }
