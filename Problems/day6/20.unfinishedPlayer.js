//https://programmers.co.kr/learn/courses/30/lessons/42576
//참가자/ 완주자 둘다 sort - 두개 인덱스 끼리 비교

function unfinished(arr1, arr2) {
  let a = arr1.sort();
  let b = arr2.sort();
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      answer = a[i];
      return answer;
    }
  }
}

console.log(
  unfinished(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
