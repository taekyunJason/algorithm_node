//https://programmers.co.kr/learn/courses/30/lessons/86051

function addShadowNum(arr) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    arr.includes(i) ? (sum += 0) : (sum += i); //arr.includes(i)
  } //arr 안에 i 요소가 있는지 확인해서 T/F 반환
  console.log(sum);
}

addShadowNum([6, 2, 3, 4, 5, 0]);
