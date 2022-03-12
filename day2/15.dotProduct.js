function dotProduct(arr1, arr2) {
  let dotProd = 0;
  for (let i = 0; i < arr1.length; i++) {
    dotProd += arr1[i] * arr2[i];
  }
  console.log(dotProd);
}

dotProduct([-1, 0, 1], [1, 0, -1]);

//풀이2
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
