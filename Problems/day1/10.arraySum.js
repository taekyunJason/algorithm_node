//https://programmers.co.kr/learn/courses/30/lessons/12950

function arraySum(arr1, arr2) {
  let arrSum = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    arrSum.push(temp);
  }
  console.log(arrSum);
}

arraySum([[1], [2]], [[3], [4]]);

//풀이2
return A.map((a, i) => a.map((b, j) => b + B[i][j]));

//풀이3
function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
