function solution(inner, outer, points_x, points_y) {
  let inAreaCnt = 0

  for (let i = 0; i < points_x.length; i++) {
    if (
      Math.pow(outer, 2) >
      Math.pow(0 - points_x[i], 2) + Math.pow(0 - points_y[i], 2)
    ) {
      inAreaCnt += 1
    }

    if (
      Math.pow(inner, 2) >=
      Math.pow(0 - points_x[i], 2) + Math.pow(0 - points_y[i], 2)
    ) {
      inAreaCnt -= 1
    }
  }
  console.log(inAreaCnt)
}

solution(1, 3, [0, 1, 2, -2, 3], [0, 1, 4, 1, 0])
// solution(2, 4, [4, 0, 1, -2], [-4, 4, 3, 0])
