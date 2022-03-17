//https://programmers.co.kr/learn/courses/30/lessons/12930
//str -> 띄어쓰기 기준으로 배열로 변환
//배열 요소별로 arr[i]%2==0 이면 upperCase 변환
//다시 str으로 변환

function createWierdStr(str) {
  let answer = [];
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let words = arr[i]
      .split("")
      .map((val, idx) => {
        return idx % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
      })
      .join("");
    answer.push(words);
  }

  return answer.join(" ");
}

console.log(createWierdStr("try hello world"));

//map((val, idx, arr)=> 연산/조건 추가)
