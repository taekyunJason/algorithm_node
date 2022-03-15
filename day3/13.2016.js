function getDayNm(m, d) {
  let day = ["FRI", "SAT", "SUN", "NOM", "TUE", "WED", "THU"];
  let mon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayNum = 0;

  for (let i = 1; i < mon[m]; i++) {
    //31번 반복 -> dayNum 값이 undefined, 배열의 값으로 입력이 아닌 index로 사용!
    dayNum += mon[i - 1];
  }

  return day[((dayNum + d) % 7) - 1];
}

console.log(getDayNm(5, 24));
