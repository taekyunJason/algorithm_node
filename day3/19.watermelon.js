function waterMelon(num) {
  return "수박".repeat(num).slice(0, num);
}

//풀이2
function solution(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? (result += "박") : (result += "수");
  }
  return result;
}
