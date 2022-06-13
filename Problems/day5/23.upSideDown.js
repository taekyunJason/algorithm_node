//숫자를 문자열로 ->배열로 -> 리버스 -> 맵

function upSideDown(num) {
  //map안의 파라미터는 메서드 파라미터와 다르게 설정하기!
  return (num + "")
    .split("")
    .reverse()
    .map((n) => +n);
}

console.log(upSideDown(12345));
