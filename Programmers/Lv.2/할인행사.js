//xyz 마트 - 일정 금액 지불하면 10일동안 회원자격 부여
//회원을 대상으로 매일 1가지 제품 할인행사 -> 할인 제품은 하루에 하나씩 구매가능

// 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입 하려고함!
// 원하는 제품 : 바나나 3/ 사과 2/ 쌀 2/ 돼지고기 2/ 냄비 1
// 15일간 할인 제품 : 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나

//원하는 제품 = want []
//원하는 제품의 수량 = number []
//할인하는 제품 = discount []

// 1.discount에서 want의 값이 모두 포함되는지 파악!
// 2. want[i] number[i] 같은 인덱스 값과 discount에서 want[i]의 값이 몇개인지 파악

function solution(want, number, discount) {
  let answer = 0
  let saleItems = []
  for (i in want) {
    saleItems.push(discount.includes(want[i]))
  }

  if (saleItems.includes(false)) {
    console.log('there is no items')
    console.log('0')
    return 0
  } else {
    console.log(saleItems)
    return saleItems
  }
}

// solution(
//   ['apple'],
//   [10],
//   [
//     [
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//       'banana',
//     ],
//   ]
// )

//want - number 객체로 변환
//discount - 객체로 변환

function solution1(want, number, discount) {
  var answer = 0

  const isMatch = (arr) => {
    // 할인 품목과 원하는 제품이 일치하는지 확인하는 함수
    var map = new Map() // 매번 map을 초기화 해준다.
    arr.forEach((v) => map.set(v, (map.get(v) || 0) + 1)) // 할인 품목들을 map에 셋팅한다.
    for (let i = 0; i < want.length; i++) {
      if (map.get(want[i]) !== number[i]) return false
    } // 원하는 품목의 수량과 할인 품목이 일치하지 않으면 false
    return true // 일치하면 true를 리턴한다
  }

  for (let j = 0; j <= discount.length - 10; j++) {
    var arr = discount.slice(j, j + 10) // 10일동안 할인이 되므로 10개씩 배열을 잘라준다.
    if (isMatch(arr)) {
      answer++
    }
  }
  return answer
}

solution1(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  [
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]
)
