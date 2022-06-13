//프로그램은 표준 입력에서 입력 데이터를 받는다. 프로그램의 입력은 T 개의 테스트 데이터로 이루어져 있는데 T 는 입력의 맨 첫 줄에 주어진다.
//각 테스트 데이터는 한 행으로서 H, W, N, 세 정수를 포함하고 있으며 각각 호텔의 층 수, 각 층의 방 수, 몇 번째 손님인지를 나타낸다(1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W).

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
6 12 10
30 50 72`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while (t--) {
  const [H, W, N] = input().split(" ").map(Number);
  const YY = Math.floor(N / H) + 1;
  const XX = N % H;
  const total = XX + YY;
  console.log(total);
}
