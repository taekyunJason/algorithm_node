//0 또는 양의 정수가 주어졌을때 이어붙여 만들수 있는 가장 큰수
//6, 10, 2 => 6210

//앞자리로 비교해서 위치 선정 -> 10보다 크면 1의 자리 비교해서 위치 선청

//앞자리로 비교하고 실제로 배치할때에는 전체 숫자로 해야함!

// function solution(numbers) {
//   let answer = 0;
//   let newArr = [];
//   let overTen = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 10) {
//       newArr.push(numbers[i]);
//       newArr.sort((a, b) => b - a);
//     } else {
//       overTen = numbers[i] / 10;
//       newArr.push(overTen);
//       newArr.sort((a, b) => b - a);
//     }
//     console.log(newArr);
//   }
//   return answer;
// }

function solution(numbers) {
  let answer = numbers
    .map((v) => v + "") //각각의 숫자를 문자로 변환
    .sort((a, b) => b + a - (a + b)) //문자로 변환된 숫자를 연결하여 배열에서 비교 정렬(내림차순)
    .join(""); //배열에서 정렬된 숫자를 다시 문자로 변환
  return answer[0] === "0" ? "0" : answer; //numbers 배열이 0으로만 구성되어있을 때 '0'만 출력
}

console.log(solution([6, 10, 2]));
