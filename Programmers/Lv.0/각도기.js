// 1: 예각 2: 직각 3: 둔각 4: 평각
// 예각 - 0~90
// 직각 - 90
// 둔각 - 90~180
// 평각 - 180

function solution(angle) {
  let answer = 0
  if (angle === 90) {
    answer = 2
  } else if (angle === 180) {
    answer = 4
  } else if (angle > 0 && angle < 90) {
    answer = 1
  } else {
    answer = 3
  }
  return answer
}
