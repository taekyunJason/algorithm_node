// 의상 이름/ 의상 종류의 2차원 배열
// 같은 이름의 의상은 없음
// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
// [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]

// 1. arr.length -> n 가지
// 2. arr[i][j]에서 j의 종류가 1가지인 경우
// 끝

// 3. arr[i][j]에서 j의 종류가 1가지 이상인 경우
// j가 다른 종류끼리 조합 가능 3C2-1 (j가 동일한 경우 제외)

// 이 문제는 조합(combination) 문제입니다.
// nCr = n!/(n-r)!r!
// 문제의 첫번째 예시를 이용하여 설명해 보겠습니다.
// clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]] 라고 주어져 있죠.
// 이 문제에서 주어진 headgear의 종류는 2개, eyewear의 종류는 1개 입니다. 이걸로 해시테이블을 만들면 다음과 같습니다.
// hash_table = {'headgear': 2, 'eyewear': 1}
// 각 의상 종류별로 1개를 입거나 안입을 수 있습니다.
// 여기서 headgear의 두 종류 중 1개를 선택할 가짓수는 2C1 입니다.
// 그리고 headgear를 아예 안입는 가짓수 역시 2C0 = 1 입니다.
// => headgear 종류를 1개를 입거나 안입을 확률은 2C1 + 2C0 이 됩니다.
// 이어서 eyewear의 한 종류중 1개를 선택할 가짓수는 1C1 입니다.
// 그리고 eyewear를 아예 안입는 가짓수 역시 1C0 = 1 입니다.
// => eyewear 종류를 1개를 입거나 안입을 확률은 1C1 + 1C0 이 됩니다.
// 최종적으로 (2C1 + 2C0) x (1C1 + 1C0) 가 각 의상 종류 중 1개를 입거나 안입을 확률의 조합이 됩니다.
// 여기서 문제의 조건 중에 의상을 최소 1개는 입는다고 했습니다. 그러면 모든 의상 종류를 하나도 안입는 가짓수 1을 최종값에서 빼주면 됩니다.
// => 정답: (2C1 + 2C0) x (1C1 + 1C0) - 1
// 일반화 하자면
// hash_table = {종류1: n, 종류2: m, 종류3: k, 종류4: p} 이렇게 주어졌다면
// (nC1 + nC0) x (mC1 + mC0) x (kC1 + kC0) x (pC1 + pC0) - 1 이 됩니다.

// 내가 작성한 코드
function solution(clothes) {
  let categoryArr = []
  let clothCnt = 1
  let totalCnt = 0

  let clothObj = {}

  for (let i = 0; i < clothes.length; i++) {
    let value = clothes[i][1]

    if (!categoryArr.includes(clothes[i][1])) {
      clothObj[value] = clothObj[value] === undefined ? 1 : clothObj[value] + 1
    }
  }
  console.log(clothObj)
  // console.log(Object.values(clothObj))

  // // 이전에 잘못 작성한 코드
  // // 원소의 종류가 1개인 경우
  // if (Object.keys(clothObj).length === 1) {
  //   totalCnt = clothes.length
  //   return totalCnt
  // }

  // // 원소의 종류가 2개 이상인 경우
  // else {
  //   for (let i = 0; i < Object.values(clothObj).length; i++) {
  //     clothCnt *= Object.values(clothObj)[i] + 1
  //   }
  //   console.log(clothCnt)
  //   // totalCnt = clothCnt + clothes.length
  //   return clothCnt-1
  // }

  for (let i = 0; i < Object.values(clothObj).length; i++) {
    clothCnt *= Object.values(clothObj)[i] + 1
  }

  return clothCnt - 1
}

// // 통과한 코드
// function solution(clothes) {
//   let answer = 1

//   // 옷의 카테고리 객체 생성
//   const clothesCategory = {}

//   // 입력받은 2차 배열 반복문
//   clothes.forEach((el) => {
//     // 카테고리 = 2차 배열의 1번 인덱스 값으로 반복문 할당
//     const category = el[1]

//     // 옷의 카테고리 객체에 카테고리 키가 undefined인 경우(아직 해당 키가 없는 경우)
//     if (clothesCategory[category] === undefined) {
//       // 해당 키에 2차 배열의 0번 인덱스 값으로 할당
//       clothesCategory[category] = [el[0]]
//     }

//     // 옷의 카테고리 객체에 해당 카테고리의 키가 있는 경우
//     else {
//       clothesCategory[category].push(el[0])
//     }
//   })

//   // 옷의 카테고리 객체를 배열로 변환해서 해당 배열의 갯수만큼 반복
//   for (const [key, value] of Object.entries(clothesCategory)) {
//     console.log(value)

//     //answer에 옷의 카테고리별 value의 값에 +1을 해서 곱함
//     answer *= value.length + 1
//   }

//   return answer - 1
// }

console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
)
