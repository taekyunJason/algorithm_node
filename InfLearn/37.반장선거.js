// 원범,원범,혜원,혜원,혜원,혜원,유진,유진

// let arr = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']
// let result = {}
// let winner = ''

// for (index in arr) {
//   let value = arr[index]
//   result[value] = result[value] === undefined ? 1 : result[value] + 1
// }

// console.log('this is result =>', result)

// winner = Object.keys(result).reduce(function (a, b) {
//   console.log(a, b)
//   return result[a] > result[b] ? a : b
// })

// console.log('this is winner =>', winner)

let students = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']
// 배열 정보를 키-값으로 담을 객체 생성 & 반장 이름 담을 변수 생성
let election = {}
let winner = ''

// 배열 갯수 만큼 반복하면서 election 객체에 정보 누적하기
for (let i = 0; i < students.length; i++) {
  // 각각의 학생 이름 할당
  let value = students[i]

  //election 객체에서 키(학생이름)에 대응되는 값을 확인해서 해당 값이 undefined라면 1할당/ 이미 키에 대응하는 값이 있다면 1씩 누적
  election[value] = election[value] === undefined ? 1 : election[value] + 1
  // console.log(election[value])
}

// election 객체에서 키만 배열로 만들어서, 각각의 원소 값(a,b)으로 election 객체에서 값을 비교해서 큰 값을 리턴
winner = Object.keys(election).reduce(function (a, b) {
  return election[a] > election[b] ? a : b
})
console.log(winner)
