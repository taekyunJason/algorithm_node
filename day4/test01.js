//익일은 24+a , if(out이 29이상이면 21로 수정) arr1,arr2 각각 합해서 빼기
//공부기록시간 리턴

function solution(arrIn, arrOut) {
  let answer = 0;
  let sumArrIn = 0;
  let sumArrOut = 0;

  for (let i = 0; i < arrOut.length; i++) {
    arrOut[i] >= 29 ? (arrOut[i] = 21) : arrOut[i];
  }

  sumArrIn = arrIn.reduce((acc, cur) => acc + cur);
  sumArrOut = arrOut.reduce((acc, cur) => acc + cur);

  answer = sumArrOut - sumArrIn;
  console.log(answer);
  return answer;
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2));
