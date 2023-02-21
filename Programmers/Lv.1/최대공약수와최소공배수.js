function solution(n, m) {
  let diviser = 1
  let max = 0
  let min = 0
  let nArr = []
  let mArr = []
  let common = []

  while (diviser <= n) {
    if (n % diviser === 0) {
      nArr.push(diviser)
    }
    ++diviser
  }

  diviser = 1
  while (diviser <= m) {
    if (m % diviser === 0) {
      mArr.push(diviser)
    }
    ++diviser
  }

  console.log(nArr, mArr)
  common = mArr.filter((a) => nArr.includes(a))

  console.log(common[common.length - 1])
}

// solution(3, 12)
