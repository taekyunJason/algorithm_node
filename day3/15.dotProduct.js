function dotProduct(arr1, arr2) {
  let num = 0;
  for (let i = 0; i < arr2.length; i++) {
    num += arr1[i] * arr2[i];
  }
  console.log(num);
}

dotProduct([-1, 0, 1], [1, 0, -1]);

//풀이2

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
