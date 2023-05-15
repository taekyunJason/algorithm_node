// 수식 배열이 변수로 입력
// 해당 수식이 맞으면 O, 틀리면 X를 배열로 반환

//배열을 각 원소로 분할

// // 내가 작성한 코드
// function solution(quiz) {
//   let answer = ''
//   let answerArr = []
//   //   console.log(quiz)

//   for (let i = 0; i < quiz.length; i++) {
//     let task = []

//     task = quiz[i].split(' ')
//     console.log(task.length)

//     for (let j = 0; j < task.length; j++) {
//       if (task[i] === '-') {
//         answer = task[0] - task[2]
//         if (answer === task[task.length - 1]) {
//           answerArr.push('O')
//         } else {
//           answerArr.push('X')
//         }
//       } else {
//         answer = task[0] + task[2]
//         if (answer === task[task.length - 1]) {
//           answerArr.push('O')
//         } else {
//           answerArr.push('X')
//         }
//       }
//     }
//   }

//   return answerArr
// }

// 정답 코드 - eval() 사용
function solution(quiz) {
  // 매개변수로 입력된 문자열을 map을 통해 하나씩 원소별로 반복한다
  return quiz.map((n) => {
    // 구조분해할당을 통해 식과 값으로 나눈다
    // 3-4 , -3
    const [evaluation, result] = n.split(' = ')

    // eval메서드는 주어진 코드를 평가하는 메서드로
    // 문자열 식을 넣으면 그에 대한 값을 반환한다
    // eval()에서 가져온 값과 위에서 할당한 result 값이 같으면 'O', 다르면 'X'를 반환한다
    return eval(evaluation) === Number(result) ? 'O' : 'X'
  })
}

// 정답 코드
function solution1(quiz) {
  const checkAnswer = (evaluation) => {
    let correct = ''
    let arr = evaluation.split(' ')
    let first = parseInt(arr[0])
    let second = parseInt(arr[2])
    let third = parseInt(arr[4])

    if (arr[1] === '+') {
      //   console.log('plus')
      correct = first + second === third ? 'O' : 'X'
    } else {
      //   console.log('minus')
      correct = first - second === third ? 'O' : 'X'
    }
    return correct
  }

  const answer = quiz.map((el) => checkAnswer(el))

  return answer
}

// 정답 코드 - 구조분해할당
function solution2(quiz) {
  let answer = []
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(' ')

    console.log(x, sign, y, z)

    let sum = 0
    if (sign === '+') {
      sum = Number(x) + Number(y)
    } else {
      sum = Number(x) - Number(y)
    }
    sum === Number(z) ? answer.push('O') : answer.push('X')
  })
  return answer
}

console.log(solution2(['3 - 4 = -3', '5 + 6 = 11']))
