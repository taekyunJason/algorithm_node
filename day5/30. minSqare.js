//https://programmers.co.kr/learn/courses/30/lessons/86491
//[[60,50],[30,70],[60,30],[80,40]] 각 원소의 첫번째 요소의 max1, 각 요소의 두번째 요소의 max2//
//if(max1>=max2 && max2의 첫번째 값<= 각 요소의 두번째 요소의 두번째로 큰값) => size = max1*각 요소의 두번째 요소의 두번째로 큰값

// function minSqare(sizeArr) {
//   let maxHor = 0;
//   let maxVer = 0;
//   let maxVerSec = 0;
//   let size = 0;

//   for (let i = 0; i < sizeArr.length; i++) {
//     maxHor = Math.max(sizeArr[i][0]);
//     maxVer = Math.max(sizeArr[i][1]);
//     console.log(maxHor, maxVer);
//   }
// }

// console.log(
//   minSqare([
//     [60, 50],
//     [30, 70],
//     [60, 30],
//     [80, 40],
//   ])
// );

//풀이2
function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  console.log(sizes);
  let hMax = Math.max.apply(
    null,
    sizes.map((item) => item[0])
  );
  let vMax = Math.max.apply(
    null,
    sizes.map((item) => item[1])
  );
  return hMax * vMax;
}

// //풀이3
// function solution(sizes) {
//     const newSizes = sizes.map(e => e.sort((a, b) => a - b));
//     return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));
// }

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
