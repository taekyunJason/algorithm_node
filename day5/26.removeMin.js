//https://programmers.co.kr/learn/courses/30/lessons/12935
//배열에서 min값 구하기 - 배열에서 min 값 제거하여 리턴/ 빈배열은 -1리턴

function removeMin(arr) {
  let min = 0;
  let answer = [];

  min = Math.min(...arr); //Math.min값 가져올때는 ()에 배열의 원소를 보내야 함!
  console.log(min);
  //배열에서 min값 제거
  answer = arr.filter((num) => num > min);
  console.log(answer);
  return answer.length == 0 ? answer.push(-1) : answer;
}

//특정값 삭제 방법

console.log(removeMin([4, 3, 2, 1]));
