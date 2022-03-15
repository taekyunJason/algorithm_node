//항해 수료 일자 리턴
//시작한 날부터 98일 이후에 수료

function solution(m, d) {
  //   let day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //   let mon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //   let leftDayInMonth = 0;
  //   let leftDatToFin=98

  //   leftDayInMonth = day[m] - d;
  //   let date = new Date()

  //   let result = "";
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let result = new Date(2022, m - 1, d);
  result.setDate(result.getDate() + 99);
  let mon = (result + "").substr(0);
  let day = (result + "").substr(9, 2).replace("0", "");

  console.log(mon, day);

  return result;
}
console.log(solution(6, 22));
