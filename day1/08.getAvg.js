//https://programmers.co.kr/learn/courses/30/lessons/12944

function getAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

getAvg([1, 2, 3, 4, 5]);
