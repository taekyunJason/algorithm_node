// 정수n을 입력받아 n의 약수를 더 한 합을 리턴

function solution(n) {
  let diviser = 1
  let diviserArr = []

  while (diviser <= n) {
    if (n % diviser == 0) {
      diviserArr.push(diviser)
      console.log(diviserArr)
    }
    ++diviser
  }
  let diviserSum = diviserArr.reduce((acc, cur) => acc + cur, 0)
  console.log(diviserSum)
  return diviserSum
}

solution(30)

// 다른 사람들 풀이
function solution1(n) {
  let result = 0

  for (let m = 1; m <= n; m++) {
    if (n % m === 0) {
      result = result + m
    }
  }
  console.log(result)
  return result
}

// solution1(12)
