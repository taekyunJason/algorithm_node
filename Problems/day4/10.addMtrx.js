//https://programmers.co.kr/learn/courses/30/lessons/12950
//이중배열의 합, 1차 배열 요소 수만큼 반복 => 한번더 2차배열로 들어가서 2차 배열 원소 수만큼 반복해서 새로운 배열에 push

function addMtrx(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      tmp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmp);
  }
  return answer;
}
