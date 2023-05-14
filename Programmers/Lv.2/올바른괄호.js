// 괄호가 () 이렇게 되면 true
// )( 이면 false
// (로 열렸으면 반드시 )로 닫히면서 짝이 지어져야 함

// 내가 쓴 코드
// function solution(s) {
//   let arr = []
//   let obj = {}
//   let startCnt = 0
//   let endCnt = 0

//   arr = s.split('')
//   //   console.log(arr)

//   for (let i = 0; i < arr.length; i++) {
//     let value = ''
//     if (arr[i] === '(') {
//       startCnt++
//     } else {
//       endCnt++
//     }
//     obj[i] = arr[i]
//   }
//   console.log(startCnt, endCnt)
//   console.log(obj)

//   if (startCnt === endCnt) {
//     if (s.slice(-1) === '(') {
//       return false
//     } else {
//       return true
//     }
//   } else {
//     return false
//   }
// }

// 정답 코드
function solution(s) {
  let answer = true
  // 1.괄호 개수 체크하는 변수 선언
  let bracetCnt = 0

  // 2.문자열 길이만큼 반복문 수행하면서 괄호 체크
  for (let i = 0; i < s.length; i++) {
    // 2-1. 열린 괄호 발견시 1증가
    if (s[i] === '(') {
      bracetCnt++
    }
    // 2-2. 닫힌 괄호 발견시 양수인지 검사
    else {
      // 2-2-1. 값이 양수라면 열린 괄호가 앞에 있으므로 변수 1감소
      if (bracetCnt > 0) {
        bracetCnt--
      }
      // 2-2-2. 값이 음수라면 열린 괄호가 앞에 없으므로 비정상적인 상황이라 false 반환
      else {
        answer = false
        break
      }
    }
  }
  // 3. 모든 문자열을 확인해서 0보다 크면 열린 괄호가 더 많으므로 false 반환
  if (bracetCnt > 0) {
    answer = false
  }
  // 4. 변수가 0이라면 true 반환
  return answer
}

console.log(solution(')))(((()'))
