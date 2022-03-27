//https://programmers.co.kr/learn/courses/30/lessons/77484
//조건:당첨가능한 [최고순위/최저순위] 리턴
//구매한 번호 = [lottos], 당첨 번호 = [win_nums]
//1.lottos와 win_nums의 일치하는 번호가 있는 경우 = 최저순위
//2.lottos의 0번이 나머지 불일치한 숫자와 모두 같은 경우 = 최고순위
//3.순위: 6개 일치- 1 / 5개 일치 - 2...2개 일치 - 5

function lotteryCheck(lottos, win_nums) {
  let answer = [];
  let ranking = [6, 6, 5, 4, 3, 2, 1];
  let possible = [];
  let zeroArr = lottos.indexOf(0);
  let max = 0;
  let min = 0;
  let solution = [];

  for (let i = 0; i < win_nums.length; i++) {
    if (lottos.indexOf(win_nums[i]) >= 0) {
      answer.push(win_nums[i]);
      console.log(answer);
    }
  }
  while (zeroArr != -1) {
    possible.push(zeroArr);
    zeroArr = lottos.indexOf(0, zeroArr + 1);
  }
  max = ranking[possible.length + answer.length];
  min = ranking[answer.length];
  console.log(max, min);

  solution.push(max, min);
  return solution;
}

console.log(lotteryCheck([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));

//***배열끼리 같은 요소값이 있는지 비교
// arr.indexOf(searchElement[, fromIndex])
// arr.lastIndexOf(searchElement[, fromIndex])

//  indexOf() 함수는
// 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는'첫번째' element의 index를 리턴합니다.

//  lastIndexOf() 함수는
// 배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '마지막' element의 index 를 리턴합니다.

// 두 함수 모두 찾으려는 값이 배열에 없으면 -1을 리턴합니다.
// 이 특징을 이용해서 특정 값이 배열에 포함되어 있는지 확인할 수 있습니다.

//***숫자를 배열로 만들기
//숫자를 문자로 변환 후에, split()사용하기

//풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
