// 중요도가 담긴 배열 properties
// 특정 프로세스의 위치 location

// function solution(properties, location) {
//   let first = 0
//   let stack = []
//   let max = Math.max(...properties)

//   console.log(properties[location])

//   first = properties.indexOf(Math.max(...properties))
//   console.log(first)

//   for (let i = first; i < properties.length; i++) {
//     // console.log(typeof properties[i])
//     stack.push(properties[i])
//   }

//   console.log('this is stack=>', stack)
// }

function solution(priorities, location) {
  let answer = 0
  let arr = []
  // 주어진 proorities에서 최대값 변수 할당 및 초기화
  let max_value = Math.max(...priorities)

  //index 배열 만들기
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i)
  }

  //priorities 배열이 비어있을 때까지 반복
  while (priorities.length != 0) {
    max_value = Math.max(...priorities)
    // console.log('this is maxValue=>', max_value)

    // priorities 배열의 0번 인덱스 값이 최대값보다 작은 경우 - 큐의 맨뒤로 보내기
    if (priorities[0] < max_value) {
      // priorities와 arr배열의 첫번째 요소를 제거해서 맨뒤에 추가 (0번째 인덱스 값 맨 뒤로 순서 바꾸기)
      priorities.push(priorities.shift())
      arr.push(arr.shift())
      //   console.log(arr)
    }
    // priorities 배열의 0번 인덱스 값이 최대값 이상인 경우
    else {
      // answer 1증가
      answer += 1
      // priorities 첫번째 요소 제거
      priorities.shift()
      // arr 첫번째 요소를 제거한 것이 위치와 같으면 answer 리턴
      //   console.log('this is arr=>', arr.shift(), answer)
      if (arr.shift() == location) return answer
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0))
