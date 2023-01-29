// n마리 중에 n/2마리 가져올 수 있음
// 포켓몬 종류에 따라 번호를 붙여서 구분! => 종류가 같으면 같은 번호!
// [3,1,2,3] -> 1:1마리, 2:1마리, 3:2마리
// 4마리중에 2마리 고르는 방법은 6가지 => 4C2 (순열?) 4*3/2
// 가질 수 있는 포켓몬 종류 최댓값 = 2

// nums = 포켓몬 종류 번호 배열, 길이는 짝수!

// 1. nums 길이 /2 만큼 가져올수 있음
// 2. 가져오는 포켓몬 종류개수의 최댓값을 리턴!

function getPoketmonCategory(nums) {
  let maxPocetmon = nums.length / 2
  let sortedArr = nums.sort()
  let poketmonArr = []

  for (i = 0; i < nums.length; i++) {
    if (sortedArr[i] != sortedArr[i + 1]) {
      poketmonArr.push(sortedArr[i])
      console.log(poketmonArr)
    }
  }

  if (maxPocetmon < poketmonArr.length) {
    console.log('maxPocetmon < poketmonArr.length')
    console.log(maxPocetmon)
    return maxPocetmon
  } else if (maxPocetmon > poketmonArr.length) {
    console.log('maxPocetmon > poketmonArr.length')
    console.log(poketmonArr.length)
    return poketmonArr.length
  } else {
    console.log('maxPocetmon = poketmonArr.length')
    console.log(maxPocetmon)
    return maxPocetmon
  }
}

// getPoketmonCategory([3, 3, 3, 2, 2, 2])

// 정리한 최종 코드

function solution(nums) {
  let maxPocetmon = nums.length / 2
  let sortedArr = nums.sort()
  let poketmonArr = []

  for (i = 0; i < nums.length; i++) {
    if (sortedArr[i] != sortedArr[i + 1]) {
      poketmonArr.push(sortedArr[i])
    }
  }

  if (maxPocetmon <= poketmonArr.length) {
    console.log(maxPocetmon)
    return maxPocetmon
  } else {
    console.log(poketmonArr.length)
    return poketmonArr.length
  }
  // 3항 연산자로 축약 가능
  //  return maxPocetmon <= poketmonArr.length ? maxPocetmon : poketmonArr.length
}

// function solution(nums) {
//   let maxPocetmon = nums.length / 2
//   let sortedArr = nums.sort()
//   let poketmonArr = []

//   for (i = 0; i < nums.length; i++) {
//     if (sortedArr[i] != sortedArr[i + 1]) {
//       poketmonArr.push(sortedArr[i])
//     }
//   }

//   return maxPocetmon <= poketmonArr.length ? maxPocetmon : poketmonArr.length
// }

solution([3, 3, 3, 2, 2, 2])
