function solution(age) {
  let today = new Date()
  let year = 0

  year = today.getFullYear()
  year -= age

  return year
}

console.log(solution(32))
