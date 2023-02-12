// 두 정수 left/right
// left - right까지의 모든 수에서 (약수의 개수가 짝수)? +: -;

function solution(left, right) {
  let diviserArr = []
  let result = 0

  //left-right까지 숫자(i) 늘리면서 반복문 수행
  for (let i = left; i <= right; i++) {
    diviserArr = []
    //특정숫자부터 i까지의 약수(j) 구하기
    for (let j = 1; j <= i; j++) {
      //j가 i의 약수라면 diviserArr배열에 담기
      if (i % j === 0) {
        // console.log('this is i and j', i, j)
        diviserArr.push(j)
        console.log(diviserArr)
      }
    }
    // 배열 길이가 짝수이면 result에 합하고, 아니면 빼기
    if (diviserArr.length % 2 == 0) {
      //   console.log(diviserArr.length)
      result += i
      //   console.log(`plus ${i} `, result)
    } else {
      //   console.log(diviserArr.length)
      result -= i
      //   console.log(`minus ${i} `, result)
    }
  }
  console.log(result)
  return result
}

// solution(24, 27)

function solution1(left, right) {
  var answer = 0
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i
    } else {
      answer += i
    }
  }
  console.log(answer)
  return answer
}

// solution1(24, 27)
