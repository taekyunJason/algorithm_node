//https://programmers.co.kr/learn/courses/30/lessons/76501
//숫자배열, 부호배열을 곱한 배열 만들기, 배열 요소의 합 리턴

function calc(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] ? (sum += arr1[i]) : (sum -= arr1[i]);
  }
  return sum;
}
