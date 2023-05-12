// 입력 - 50,5,20,20,20
// 첫번째 입력으로 제한무게, 두번째 입력으로 함께한 친구들의 수, 세번째부터 탑승할 친구들의 몸무게

function solution(input) {
  let limit = input[0]
  let weights = []

  let accWeight = 0
  let accCnt = 0

  for (let i = 2; i < input.length; i++) {
    weights.push(input[i])
    accWeight += input[i]
    if (accWeight < limit) {
      accCnt++
    }
  }
  console.log(accCnt)
  return accCnt
}

console.log(solution([50, 5, 20, 20, 20, 20, 20]))
