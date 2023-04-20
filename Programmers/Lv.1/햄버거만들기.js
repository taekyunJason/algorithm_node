// 햄버거 포장하기
// 1-2-3-1 순서 // 빵-야채-고기-빵
// 배열에서 1-2-3-1 포함되는지 확인
// 남은 배열에서 1-2-3-1 포함되는지 확인

function solution(ingredient) {
  let answer = 0
  const stack = []

  for (let i of ingredient) {
    stack.push(i)

    if (stack.slice(-4).join('') == '1231') {
      stack.splice(-4)
      answer++
    }
  }
  return answer
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))

/*

for ... in => 객체의 반복시 사용 (배열 반복에서 사용시 인덱스값 출력)
for ... of => 배열의 반복시 사용 (객체 반복에서 사용시 타입에러 발생)

*/
