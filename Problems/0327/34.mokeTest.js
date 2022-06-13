//https://programmers.co.kr/learn/courses/30/lessons/42840
//다시풀기!!!
//조건:a,b,c가 찍은 답과 정답 배열의 값을 비교해서 가장 많이 맞춘 사람 순서대로 오름차순 리턴
//1번 사람 : 1,2,3,4,5,1,2,3,4,5...
//2번 사람 : 2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5...
//3번 사람 : 3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5...
//정답 배열 갯수만큼 반복돌리면서 1번,2번,3번과 비교
//같은 값을 가지는 개수 비교해서 0이 아닌 경우에는 오름차순 정렬

//정답 갯수 배열 -> 사람별 패턴으로 정답 길이만큼 반복
//배열의 요소 비교해서 같은 경우의 갯수 추출

//처음 풀이
// function test(arr) {
//   let no1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
//   let no2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
//   let no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   let ans1 = [];
//   let ans2 = [];
//   let ans3 = [];
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === no1[i]) {
//       ans1.push(no1[i]);
//     }
//     if (arr[i] === no2[i]) {
//       ans2.push(no2[i]);
//     }
//     if (arr[i] === no3[i]) {
//       ans3.push(no3[i]);
//     }
//   }
//   console.log(ans1.length, ans2.length, ans3.length);
//   answer.push(ans1.length, ans2.length, ans3.length);
//   console.log(answer[0]);
//   answer.sort((a, b) => a - b);
//   console.log(answer);

//   let filter = answer.filter((element) => element !== 0);
//   return filter;
// }

// console.log(test([1, 2, 3, 4, 5]));

//정답 배열의 값과 각자의 값을 비교 -> 같은 값을 새로운 배열에 할당
//새로운 배열의 길이가 맞춘 정답의 갯수 -> 정답 갯수가 0이 아닌 사람들 끼리 인덱스 번호 오름차순

//인덱스 번호 가져오기?

//풀이
function solution(arr) {
  let answer = [];

  //각각의 패턴을 배열화
  let no1 = [1, 2, 3, 4, 5];
  let no2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //맞춘 정답 갯수가 담길 score를 초기화
  let score = [0, 0, 0];

  //정답 배열 길이만큼 반복하면서 각각 배열에서 정답이 있으면 score의 인덱스++
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === no1[i % no1.length]) score[0]++;
    if (arr[i] === no2[i % no2.length]) score[1]++;
    if (arr[i] === no3[i % no3.length]) score[2]++;
  }

  //score배열에서 최댓값을 구해놓고,
  let max = Math.max(...score);
  //score 배열 길이만큼 반복하면서 최댓값과 인덱스의 값을 비교해서 같으면 인덱스값을 배열에 추가
  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) answer.push(i + 1);
  }

  //인덱스가 추가된 배열을 리턴
  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
