//https://programmers.co.kr/learn/courses/30/lessons/86491

function minSqare(arr) {
  let hor = [];
  let ver = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => b - a);
    hor.push(arr[i][0]);
    ver.push(arr[i][1]);
  }
  let max_hor = Math.max(...hor);
  let max_ver = Math.max(...ver);

  return max_hor * max_ver;
}

console.log(
  minSqare([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
