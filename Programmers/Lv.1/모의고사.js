// 1번 - 12345,12345,12345...
// 2번 - 21232425,21232425...
// 3번 - 3311224455,3311224455...

// 1, 2, 3번중에서 주어진 문제와 비교했을 때 가장 많이 맞춘 사람을 리턴
// 동점자 있는 경우 오름차순으로 정렬하여 리턴

function solution(question) {
  let numOne = [1, 2, 3, 4, 5]
  let numTwo = [2, 1, 2, 3, 2, 4, 2, 5]
  let numThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  let score = [0, 0, 0]
  let answer = []

  // 반목문을 돌면서 확인할 때, 1,2,3번 학생의 패턴보다 긴 문제가 들어온 경우
  // 문제수에서 1,2,3번 학생의 패턴을 나눈 나머지의 패턴대로 찍어야 오류 발생되지 X
  for (let i in question) {
    if (question[i] === numOne[i % numOne.length]) score[0]++
    if (question[i] === numTwo[i % numTwo.length]) score[1]++
    if (question[i] === numThree[i % numThree.length]) score[2]++
  }

  let max = Math.max(...score)

  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      answer.push(i + 1)
    }
  }
  return answer
}

console.log(solution([1, 3, 2, 4, 2]))
