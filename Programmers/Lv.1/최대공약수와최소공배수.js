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

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function replace(arr, from, to) {
  let replaced = Array.from(arr)
  // for (let i = 0; i < replaced.length; i++) {
  //   if (replaced[i] === from) {
  //     replaced[i] = to
  //   }
  // }
  replaced = arr.map((el) => (el === from ? to : from))
  return replaced
}
let fruits = ['🍌', '🍓', '🍇', '🍓']
const result = replace(fruits, '🍓', '🥝')
// console.log(result)
// ;(fruits = ['🍌', '🥝', '🍇', '🥝']), '🥝'
// let count = fruits.reduce((cnt, el) => cnt + ('🥝' === el), 0)
// console.log(count)

function count(arr, item) {
  let counter = 0
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === item) {
  //     counter++
  //   }
  // }
  counter = arr.reduce((acc, el) => acc + (el === item), 0)
  return counter
}

let array = ['🍌', '🥝', '🍇', '🥝']
let result1 = count(array, '🥝')
// console.log(result1)

// let fruit1 = ['🍌', '🥝', '🍇']
// let fruit2 = ['🍌', '🍓', '🍇', '🍓']

// let difference = fruit1.filter((el) => fruit2.includes(el))
// console.log(difference)

function match(arr1, arr2) {
  let matched = []
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       matched.push(arr1[i])
  //     }
  //   }
  // }
  matched = arr1.filter((el) => arr2.includes(el))
  return matched
}
// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']))

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21]
// let filtered = nums.filter((el) => el >= 5)
// // console.log(filtered)

// let sum = filtered.reduce((acc, el) => acc + el, 0)

const result2 = nums
  .filter((el) => el > 5)
  .reduce((acc, el, index, arr) => acc + el / arr.length, 0)
// console.log(result2)

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
}

function changeColor({ styles: { color } }) {
  console.log(color)
}

// changeColor(prop)
