// 회문 만들기
// 문자열 - 각각 글자 쪼개서 배열로 만들기
// 배열 정렬하기
// 각 원소의 개수 파악해서 새로운 배열에 담기
// 새로운 배열에서 홀수인 숫자 파악하기
// 홀수인 숫자는 1개까지만 허용!
// 홀수인 숫자 갯수 - 1 로 리턴

function solution(X) {
  const arr = [...X].sort()
  console.log(arr)
  const cnt = arr.reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a
  }, {})

  const cntArr = Object.values(cnt)
  let oddCnt = 0
  for (let i = 0; i < cntArr.length; i++) {
    if (cntArr[i] % 2 == 1) {
      oddCnt += 1
    }
  }

  console.log(cnt)
  console.log(cntArr)
  //   console.log(oddCnt)
  console.log(oddCnt % 2 > 0 ? oddCnt - 1 : oddCnt)
}

// solution('ervervige')
solution('p')
