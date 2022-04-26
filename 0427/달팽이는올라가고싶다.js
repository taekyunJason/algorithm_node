//땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.
//달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.
//달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

//첫째 줄에 달팽이가 나무 막대를 모두 올라가는데 며칠이 걸리는지 출력한다.

//하루에 올라갈수 있는 높이 a-b
//v높이를 올라가는데 걸리는 일수 = Math.ceil(v/(a-b))

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 1 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while (t--) {
  const [a, b, v] = input().split(" ").map(Number);
  console.log(Math.ceil(v / (a - b)));
}

let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil((V - B) / (A - B)));
