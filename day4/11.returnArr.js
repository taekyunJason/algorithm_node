//https://programmers.co.kr/learn/courses/30/lessons/12954
//a,b를 입력받아서 [a*1, a*2, a*3...](총 b개) 를 만족하는 배열을 리턴
//b번 만큼 반복하면서, a* 횟수로 배열에 추가

function returnArr(a, b) {
  let arr = [];
  for (let i = 1; i <= b; i++) {
    arr.push(a * i);
  }
  return arr;
}
