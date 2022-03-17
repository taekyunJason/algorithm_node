//https://programmers.co.kr/learn/courses/30/lessons/12934

function checkSqrt(num) {
  let root = Math.sqrt(num);
  console.log(root);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1; //math.pow(밑, 지수)
}

console.log(checkSqrt(120));
