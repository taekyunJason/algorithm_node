// 원범,원범,혜원,혜원,혜원,혜원,유진,유진

let arr = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']
let result = {}
let winner = ''

for (index in arr) {
  let value = arr[index]
  result[value] = result[value] === undefined ? 1 : result[value] + 1
}

console.log('this is result =>', result)

winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b)
  return result[a] > result[b] ? a : b
})

console.log('this is winner =>', winner)
