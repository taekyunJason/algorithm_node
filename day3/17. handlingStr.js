function solution(s) {
  let answer = false;
  let temp = Number(s);
  if ((s.length === 4 || s.length === 6) && temp === parseInt(s)) {
    console.log((answer = true));
  } else console.log((answer = false));
}

solution("1234");
