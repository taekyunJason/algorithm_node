//정류장 N개, 각각의 정류장에는 1 ~ N까지의 번호가 적힘
//2차원배열의 정류장 표지판에는 A->B 버스가 있으면 1/ 없다면 0
// 0 1 0 => 1->2
// 0 0 1 => 2->3
// 1 0 0 => 3->1

// 0 0 1
// 0 0 1
// 0 1 0

function solution(n, signs) {
  let answer = [];

  console.log(signs);

  //   for (row in answer) {
  //     let move_row = set();

  //     answer = dfs(row, move_row, signs, answer);

  //     for (next in move_row) {
  //       answer[row][next] = 1;
  //     }
  //   }

  return signs;
}

function dfs(row, move_row, signs, answer) {
  for (col in answer(answer.length)) {
    if (signs[row][col] == 0 || row == col || col in move_row) {
      continue;
    }
    move_row.push(col);
    answer = dfs(col, move_row, signs, answer);
  }
  return answer;
}

console.log(
  solution(3, [
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
);
