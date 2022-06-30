// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
//더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

//arr 에서 두 수를 뽑아 더하기
//arr[i] 만큼 반복하면서 순회
//arr[j] 만큼 반복하면서 순회
//해당 수를 newArr에서 정렬

function solution(arr) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      temp.push(arr[i] + arr[j]);
    }
  }
  let answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
