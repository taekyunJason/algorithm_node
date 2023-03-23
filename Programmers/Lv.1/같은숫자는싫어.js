// 배열 돌면서 i / i+1이  같으면 패스/ 다르면 담기

function solution(arr) {
  let answer = []
  answer.push(arr[0])

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i])
    }
  }
  console.log(answer)
  return answer
}

solution([1, 1, 3, 3, 0, 1, 1])
