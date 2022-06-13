//https://programmers.co.kr/learn/courses/30/lessons/76501

function sumPlusMinus(absolutes, sings) {
  let sum = 0;
  for (let i = 0; i < sings.length; i++) {
    sings[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }
  console.log(sum);
}

sumPlusMinus([4, 7, 12], [true, false, true]);

//풀이2
function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (sum += absolutes[i] * 1) : (sum += absolutes[i] * -1);
  }
  return sum;
}

//풀이3
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

//배열관련 함수 : https://tutorialpost.apptilus.com/code/posts/js/js-array-concat/
//배열의 합계 : https://hianna.tistory.com/408
//배열간 합치기 : https://cornswrold.tistory.com/488
//forEach 문 : https://goddino.tistory.com/132
