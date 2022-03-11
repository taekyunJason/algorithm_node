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
