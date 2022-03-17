//https://programmers.co.kr/learn/courses/30/lessons/12935

function delMin(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;

  // if (arr.length == 1) {
  //   return [-1];
  // }
  // let minimun = Math.min(...arr);
  // arr.splice(arr[minimun], 1);
  // return arr;
}

console.log(delMin([10]));
