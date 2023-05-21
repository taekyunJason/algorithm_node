// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
//모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// js의 sort()는 단순히 숫자의 크기로 정렬하지 않음.
//따라서 오름차순/ 내림차순 등으로 정렬하는 로직이 추가로 필요함!

function solution(arr) {
  let max1 = 0
  let max2 = 0

  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b)

    if (arr[i][0] > max1) {
      max1 = arr[i][0]
    }
    if (arr[i][1] > max2) {
      max2 = arr[i][1]
    }
  }

  return max1 * max2
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 9],
  ])
)
