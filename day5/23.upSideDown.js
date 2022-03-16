//숫자를 문자열로 ->배열로 -> 리버스 -> 맵

function upSideDown(num) {
  return (num + "")
    .split("")
    .reverse()
    .map((n) => +n);
}

console.log(upSideDown(12345));
