// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
//모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요

//여러개의 명함 배열로 전달
// 여러개의 명함 x / y 에 각각 담기
// 배열에서 가장 큰값 구하기

// (x의 최대값 >= y의 값) 일때 => 넓이 = w1
// (y의 최대값 >= x의 값) 일때 => 넓이 = w2

// function solution(arr) {
//   let max = [];
//   let min = [];
//   let max1 = 0;
//   let max2 = 0;
//   let answer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     max.push(Math.max(...arr[i]));
//     min.push(Math.min(...arr[i]));
//   }
//   max1 = Math.max(...max);
//   max2 = Math.max(...min);
//   answer = max1 * max2;

//   return answer;
// }

function solution2(arr) {
  let hor = [];
  let ver = [];

  for (let i = 0; i < arr.length; i++) {
    //arr[i][0] arr[i][1] 사이에 내림차순으로 정렬
    arr[i].sort((a, b) => b - a);

    hor.push(arr[i][0]);
    ver.push(arr[i][1]);
  }
  let max_hor = Math.max(...hor);
  let max_ver = Math.max(...ver);

  return max_hor * max_ver;
}

console.log(
  solution2([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
