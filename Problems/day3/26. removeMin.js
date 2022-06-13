//https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.sort((a, b) => b - a);
  if (arr.length < 1) {
    return [-1];
  }
  return arr;
}

solution([3, 1, 2]);

// function solution1(arr) {
//   arr.pop(Math.min(arr));

//   arr.length === 0 ? arr.push(-1) : arr;

//   console.log(arr);
// }

// solution1([5, 2, 3]);
