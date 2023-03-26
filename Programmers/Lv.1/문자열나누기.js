// 문자열 s 가 입력되었을 때,
// 첫 글자: x / x - x가 아닌 글자가 나온 횟수 세기
// 처음으로 두 횟수가 같아지는 순간 멈추기
// 지금까지 읽은 문자열 분리

// s에서 분리한 문자열을 빼고 남은 부분에서 반복

// 분해한 문자열 개수 리턴
let splitedCnt = 0

function solution(s) {
  let firstAlpha = s.substring(0, 1)
  let xCnt = 0
  let notXCnt = 0
  let leftStr = ''

  //   console.log('this is s. length => ', s.length)
  // 짝수 개수인 경우
  if (s.length % 2 === 0) {
    // 개수가 2개 이상인 경우 비교 진행
    if (s.length > 1) {
      for (let i = 0; i < s.length; i++) {
        if (s[i] === firstAlpha) {
          ++xCnt
        } else {
          ++notXCnt
        }

        // console.log('this is xCnt => ', xCnt, 'this is not xCnt =>', notXCnt)
        if (xCnt === notXCnt) {
          leftStr = s.substring(i + 1)
          ++splitedCnt

          console.log(splitedCnt)
          return solution(leftStr)
        }
        console.log(xCnt, notXCnt)
      }
      // 반복문이 끝났는데, notXCnt가 0인 경우 (=같은 문자만 존재하는 경우)
      if (notXCnt === 0) {
        return ++splitedCnt
      } else if (xCnt !== notXCnt) {
        return ++splitedCnt
      }
    }
    // 개수가 1개 이하인 경우
    else {
      return splitedCnt
    }
  }
  // 홀수 개수인 경우
  else {
    if (s.length > 1) {
      for (let i = 0; i < s.length; i++) {
        if (s[i] === firstAlpha) {
          ++xCnt
        } else {
          ++notXCnt
        }

        console.log('this is xCnt => ', xCnt, 'this is not xCnt =>', notXCnt)
        if (xCnt === notXCnt) {
          leftStr = s.substring(i + 1)
          ++splitedCnt

          return solution(leftStr)
        }
      }
      if (notXCnt === 0) {
        return ++splitedCnt
      } else if (xCnt !== notXCnt) {
        return ++splitedCnt
      }
    } else {
      return ++splitedCnt
    }
  }
}

// function solution(s) {
//   const slice_arr = []

//   let same_cnt = 0
//   let other_cnt = 0
//   let idx = 0
//   for (let el of s) {
//     const test = new Set(s)
//     let x = s[0]
//     el === x ? same_cnt++ : other_cnt++
//     if (same_cnt === other_cnt) {
//       const sliced_str = s.slice(0, idx + 1)
//       slice_arr.push(sliced_str)
//       s = s.substring(idx + 1)
//       idx = -1
//       same_cnt = 0
//       other_cnt = 0
//     } else if (Array.from(test).length === 1) {
//       slice_arr.push(s)
//       return slice_arr.length
//     }
//     idx++
//   }

//   return slice_arr.length === 0 ? 1 : slice_arr.length
// }
console.log(solution('aabbccabc'))
