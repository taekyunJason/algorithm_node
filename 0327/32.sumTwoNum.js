//https://programmers.co.kr/learn/courses/30/lessons/68644
//조건 -> 입력되는 배열에서 서로 다른 인덱스에 있는 두 수를 더해서 만들수 있는 모든 수를 오름차순의 배열로 리턴
//순차적으로 배열안의 값인 두 수를 더하기 - 일치하는 값은 제거 - 오름차순 정렬

function sumTwoNum(arr) {
  let answer = [];
  let solution = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      answer.push(arr[i] + arr[j]);
      solution = new Set(answer);
    }
  }
  newArr = Array.from(solution);
  newArr.sort((a, b) => a - b);

  return newArr;
}

console.log(sumTwoNum([2, 1, 3, 4, 1]));

//두 수 뽑아서 더하기?
//배열을 돌면서 다음 인덱스와 더하기 = 이중반복문

//배열에서 중복된 값 제거하기
//1. set() => 오브젝트로 중복없이 리턴 => 배열로 다시 변환해야 정렬 가능
//2. filter()+indexOf()

//오브젝트 => 배열로 변환하기
//=> Array.from()
// 유사배열객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array객체 생성

// 1. String에서 배열 만들기
// Array.from('Han');	//["H", "a", "n"]

// 2. Set에서 배열
// const s = new Set(['Han', window]);
// Array.from(s);	//["Han", window]

// 3. Map에서 배열
// const map = new Map([['1','a'], ['2','b']]);
// Array.from(map.values());	//['a', 'b']

// 4. Array.from과 화살표 함수
// Array.from([1, 2, 3], x => x + x);	//[2, 4, 6]

//풀이2
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
