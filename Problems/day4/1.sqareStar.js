//https://programmers.co.kr/learn/courses/30/lessons/12969
//n만큼 가로로 반복찍기/ m만큼 세로로 반복하기

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
