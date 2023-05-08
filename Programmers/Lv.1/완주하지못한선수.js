//participation 배열, completion 배열 주어질때 완주하지 못한 선수의 이름을 반환
//participation 반복하면서 각각의 원소가 completion에 있는지 확인!

function solution(participation, completion) {
  //   let answer = ''
  //   participation.sort()
  //   completion.sort()

  //   console.log(participation)
  //   console.log(completion)
  //   for (i in participation) {
  //     if (participation[i] !== completion[i]) {
  //       return participation[i]
  //     }
  //   }

  const completedRunner = {}
  let unfinishedRunner = ''

  completion.forEach((runner) => {
    completedRunner[runner] = completedRunner[runner] + 1 || 1
  })

  participation.forEach((runner) => {
    if (completedRunner[runner]) {
      completedRunner[runner] = completedRunner[runner] - 1
    } else {
      unfinishedRunner = runner
    }
  })
  return unfinishedRunner
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
)
