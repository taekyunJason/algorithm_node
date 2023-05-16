// 학생별로 정수번호 부여
// 3명을 합했을때 0이 되면 삼총사
// 삼총사가 되는 경우의 수를 반환
// 없는 경우 0 반환

// 0이 있는 경우, 0 + 나머지 2개 더해서 0
// 0이 없는 경우 3개 더해서 0

// 각 원소를 더해서 0이 되는 경우의 수 찾는 방법

// 반복문 3번 돌리기?
function solution(number) {
  // 삼총사 경우의 수
  let answer = 0

  // 1번 + 2번 + 3번 경우의 수 배열
  let answerArr = []

  // 1번 학생 정하기 위한 반복문
  for (let i = 0; i < number.length; i++) {
    // 2번 학생 정하기 위한 반복문
    for (let j = i + 1; j < number.length; j++) {
      // 3번 학생 정하기 위한 반복문
      for (let k = j + 1; k < number.length; k++) {
        // 1번 + 2번 + 3번 학생의 합 -> 모든 경우의 수를 배열에 할당
        answerArr.push(number[i] + number[j] + number[k])
      }
    }
  }
  // 경우의 수 배열에서 값이 0인 원소의 개수를 삼총사 변수에 할당
  answer = answerArr.filter((el) => el === 0).length

  return answer
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
