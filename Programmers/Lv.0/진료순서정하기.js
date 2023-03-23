// emergency 배열 [5,3,1] => 우선순위 [1,2,3]
// 필요한것
// 기존 배열의 인덱스
// 기존 배열의 크기비교 => 응급도 배열에 담기

// 배열 정럴
// 정렬된 배열의 원소값의 원래 배열의 인덱스 구하기

function solution(emergency) {
  let answer = []
  let indexArr = []

  answer = [...emergency].sort((a, b) => b - a)

  for (let i = 0; i < answer.length; i++) {
    indexArr.push(answer.indexOf(emergency[i]) + 1)
  }

  return indexArr
}

console.log(solution([3, 76, 24]))
