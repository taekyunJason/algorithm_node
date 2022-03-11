//https://programmers.co.kr/learn/courses/30/lessons/76501

function sumPlusMinus(absolutes, sings) {
  let sum = 0;
  for (let i = 0; i < sings.length; i++) {
    sings[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }
  console.log(sum);
}

sumPlusMinus([4, 7, 12], [true, false, true]);
