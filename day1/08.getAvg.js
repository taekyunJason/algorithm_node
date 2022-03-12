//https://programmers.co.kr/learn/courses/30/lessons/12944

function getAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

getAvg([1, 2, 3, 4, 5]);

//내풀이
function solution(arr) {
  var sum = arr.reduce((acc, cur) => acc + cur, 0);
  var avg = sum / arr.length;
  return avg;
}

//풀이2
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
