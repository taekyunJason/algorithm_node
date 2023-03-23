// nXn 크기의 지도
// arr1 arr2 에서 숫자 배열 -> 2진수로 변환 + 자릿수 일지 필요
// arr1 = [], arr2 = []

// arr1[0], arr2[0]에서 같은 인덱스 번호에서 둘중 하나라도 1이면 1처리
// 두개의 배열을 합쳐서 1 -> #, 0 -> ' ' 의 문자열로 반환

function solution(n, arr1, arr2) {
  let convertedArr1 = []
  let convertedArr2 = []
  let zerofill1 = ''
  let zerofill2 = ''

  let string = ''
  let answer = []

  for (let i = 0; i < arr1.length; i++) {
    zerofill1 =
      arr1[i].toString(2).length === n
        ? arr1[i].toString(2)
        : arr1[i].toString(2).padStart(n, 0)
    zerofill2 =
      arr2[i].toString(2).length === n
        ? arr2[i].toString(2)
        : arr2[i].toString(2).padStart(n, 0)

    console.log(zerofill1, zerofill2)
    let answerStr = ''
    for (let i = 0; i < n; i++) {
      answerStr += zerofill1[i] == '1' || zerofill2[i] == '1' ? '#' : ' '
    }
    answer.push(answerStr)
  }
  console.log(answer)
  return answer
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
