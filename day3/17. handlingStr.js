function solution(s) {
  let answer = false;
  let temp = Number(s);
  if ((s.length === 4 || s.length === 6) && temp === parseInt(s)) {
    return (answer = true);
  } else return (answer = false);
}

handling("a1234");
