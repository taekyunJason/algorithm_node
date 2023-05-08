// 의상 이름/ 의상 종류의 2차원 배열
// 같은 이름의 의상은 없음
// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
// [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]

// 1. arr.length -> n 가지
// 2. arr[i][j]에서 j의 종류가 1가지인 경우
// 끝

// 3. arr[i][j]에서 j의 종류가 1가지 이상인 경우
// j가 다른 종류끼리 조합 가능 3C2-1 (j가 동일한 경우 제외)

function solution(clothes) {
  let kindCnt = 0
  const defaultCnt = clothes.length

  for (let i = 0; i < clothes.length; i++) {
    // 배열의 두번째 원소의 종류 파악
  }

  // if (원소의 종류가 1개) {}

  // else{종류가 다른 조합 개수}
}
