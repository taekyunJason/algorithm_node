function solution(arr1, arr2) {
  let answer = 0;
  let str1 = "";
  let str2 = "";
  let arrIn = [];
  let arrOut = [];
  let totalStr = "";

  let totalArr = [];
  let hrIn = 0;
  let minIn = 0;
  let totalInMin = 0;
  let hrOut = 0;
  let minOut = 0;
  let totalOutMin = 0;
  let studyMin = 0;
  let studyHr = 0;

  arrIn = arr1.join(":").split(":");
  arrOut = arr2.join(":").split(":");

  for (let i = 0; i < arrIn.length; i++) {
    i % 2 == 0 ? (hrIn += parseInt(arrIn[i])) : (minIn += parseInt(arrIn[i]));
  }
  console.log(minIn);
  totalInMin = hrIn * 60 + minIn;

  for (let i = 0; i < arrOut.length; i++) {
    i % 2 == 0
      ? (hrOut += parseInt(arrOut[i]))
      : (minOut += parseInt(arrOut[i]));
  }
  console.log(minOut);

  totalInMin = 60 * hrIn + minIn;
  totalOutMin = 60 * hrOut + minOut;
  studyMin = totalOutMin - totalInMin;
  studyHr = Math.floor(studyMin / 60);
  console.log(studyHr);

  return answer;
}
let arr1 = ["8:42", "9:00", "8:50", "8:47", "9:01", "8:51", "8:59"];
let arr2 = ["21:42", "23:10", "25:30", "29:10", "23:11", "26:44", "29:26"];
console.log(solution(arr1, arr2));
