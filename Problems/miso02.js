// n채의 집이 나열 - 각집의 쓰레기(p, g, m) 는 별도의 봉투에 수거
// 쓰레기 수거하는 트럭은 3대
// 모든 트럭은 길의 시작점에서 작업을 시작하고 그자리에서 끝냄
// 출발점 - 0번집까지 통과 : D[0]분 소요
// k-1 ~ k 번집 통과 : D[k] 소요
// k는 1 ~ n-1까지를 범위로 함
// 봉투 1개 싣는데 1분 소요
// D = [2,5] : 출발-0번집 사이를 통과하는데 2분 걸리고, 0번집-1번짐 사이를 통과하는데 5분 걸림

// k번집이 모은 봉투의 개수 = 문자열 T[K]에 기록
// T[1] = 'GMG' : 1번집이 유리2/ 금속1개 모음
// 각각의 집은 종류별 봉투를 1개 이상 모아둘 수 있음.

// 모든 작업이 끝날때 까지 걸리는 최소시간? 6/5/15

function solution(D, T) {
  let distanceTime = []
  let categoryTime = []
  let totalTime = []

  let newArr = []
  let maxCnt = []

  //   for (i in D) {
  //     distanceTime.push(D[i] * 2)
  //   }
  for (let i = 0; i < D.length; i++) {
    i > 0
      ? distanceTime.push((D[i] + D[i - 1]) * 2)
      : distanceTime.push(D[i] * 2)
  }
  //   for (let i = 0; i < D.length; i++) {
  //     D.reduce(() => {})[i]
  //   }
  console.log('this is distanceTime', distanceTime)

  for (i in T) {
    newArr[i] = [...T[i]]
    // console.log(i, newArr[i])

    const occurrences = newArr[i].reduce((a, i) => {
      return (a[i] = (a[i] || 0) + 1), a
    }, {})
    // console.log(occurrences)
    maxCnt = Object.values(occurrences).sort().reverse()[0]
    console.log('maxCnt', maxCnt)
    categoryTime.push(maxCnt)
    // getKeyByValue(occurrences, maxCnt)
  }
  console.log(categoryTime)
  if (distanceTime.length === categoryTime.length) {
    for (i = 0; i < distanceTime.length; i++) {
      totalTime.push(distanceTime[i] + categoryTime[i])
    }
  }

  console.log(totalTime.sort()[0])
}

function getKeyByValue(object, value) {
  console.log(Object.keys(object).find((key) => object[key] === value))
}

// solution([2, 5], ['PGP', 'M'])
solution([3, 2, 4], ['MPM', '', 'G'])
