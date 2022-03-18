//조건 : 누적 공부시간 구하기(시,분)
//다음날-> 24+a // if (time>=29 => 21)
//chechIn, checkOut ARR => hr/ min
//00시간 00분 형태로 출력하기
//arrIn-> arr.join(':') -> str.split(':') -> arr.length loop -> (idx%2==0)? hr+=arr[i]:min+=arr[i];
//arrOut-> arr.join(':') -> str.split(':') -> arr.length loop -> if(idx%2==1 %% arr[i]>=29)return arr[i]=21 -> (idx%2==0)? hr+=arr[i]:min+=arr[i];
//totalTime = (hrIn-hrOut)*60 + (minIn-minOut)
//totalHr = Math.floor(totalTime/60)
//totalMin = totalTime%60
//return {totalHr}시간 {totalMin}분

function solution(arr1, arr2) {
  let hrIn = 0;
  let minIn = 0;
  let hrOut = 0;
  let minOut = 0;
  let editedTime = [];
  let totalTime = 0;
  let totalHr = 0;
  let totalMin = 0;

  arr1 = arr1.join(":").split(":");
  arr2 = arr2.join(":").split(":");

  arr1.map((val, idx) => {
    idx % 2 === 0 ? (hrIn += parseInt(val)) : (minIn += parseInt(val));
  });

  console.log(hrIn, minIn);

  arr2.map((val, idx) => {
    idx % 2 === 0 && val >= "29" ? (val = "21") : val;
    editedTime.push(val);
  });

  editedTime.map((val, idx) => {
    idx % 2 === 0 ? (hrOut += parseInt(val)) : (minOut += parseInt(val));
  });

  console.log(hrOut, minOut);

  totalTime = (hrOut - hrIn) * 60 + minOut - minIn;
  totalHr = Math.floor(totalTime / 60);
  totalMin = totalTime % 60;

  console.log(totalTime);
  console.log(totalTime / 60);
  console.log(totalTime % 60);

  return totalHr + "시간 " + totalMin + "분";
}
let arr1 = ["8:42", "9:00", "8:50", "8:47", "9:01", "8:51", "8:59"];
let arr2 = ["21:42", "23:10", "25:30", "29:10", "23:11", "26:44", "29:26"];
console.log(solution(arr1, arr2));

//arr -> str : arr.join(seperator)
