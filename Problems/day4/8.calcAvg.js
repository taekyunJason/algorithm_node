//https://programmers.co.kr/learn/courses/30/lessons/12944
//배열 요소의 합 -> 평균 리턴

function calcAvg(arr) {
  return arr.reduce((arr, cur) => arr + cur) / arr.length;
}
