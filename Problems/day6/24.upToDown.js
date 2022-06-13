//https://programmers.co.kr/learn/courses/30/lessons/12933v
//int -arr -sort -int 리턴

function upToDown(num) {
  return parseInt(
    (num + "")
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(upToDown(118372));

//숫자를 배열로 = int - str - arr
//(n+'').split('')
