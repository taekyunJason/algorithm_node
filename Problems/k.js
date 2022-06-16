// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
//commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

//접근
//배열이 있을때 i번째부터 j번째까지 먼저 자르기
//자른 배열을 정렬
//정렬된 배열에서 k번째 결과를 가져오기
//결과값을 배열에 담기

function solution(array, commands) {
  let answer = [];
  let arrStart = 0;
  let arrFin = 0;
  let k = 0;
  let newArr = [];

  for (let i = 0; i < commands.length; i++) {
    arrStart = commands[i][0];
    arrFin = commands[i][1];
    k = commands[i][2];
    // console.log(arrStart, arrFin, k);

    newArr = array.slice(arrStart - 1, arrFin).sort((a, b) => a - b);
    // console.log(newArr);
    answer.push(newArr[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

//풀이 방식은 맞는 거 같은데 어디서 틀렸는지 계속 찾다가 이유를 알게 되었는데 바로 sort() 메서드 부분이었다.

// sort 메서드는 compareFunction을 받는 메서드인데,
// compareFunction이란 정렬 순서를 정의하는 함수이며 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다.
// 숫자 정렬에서는 2가 1보다 크지만 compareFunction 인자가 없을 시,
// 숫자가 문자열로 변환되기 때문에 맨 앞 글자를 비교하여 '10'은 '2'보다 작은 값으로 취급된다고 한다.

// 따라서 원하는 결과인 오름차순 순서로 숫자를 비교하려면 sort( )를 비워서 쓰면 안 되고 안에 compareFunction조건을 사용해야 원하는 오름차순 결과를 얻을 수 있었다.
