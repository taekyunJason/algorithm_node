//https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  // arr.pop(Math.min(arr))
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  //     arr.length===0?arr.push(-1):arr;
  if (arr.length < 1) {
    return [-1];
  }
  return arr;
}

// function solution1(arr) {
//   arr.pop(Math.min(arr));

//   arr.length === 0 ? arr.push(-1) : arr;

//   console.log(arr);
// }

// solution1([5, 2, 3]);
