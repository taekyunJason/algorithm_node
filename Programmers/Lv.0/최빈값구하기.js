//최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
//정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
//최빈값이 여러 개면 - 1을 return 합니다.

function solution(array) {
  let cntArr = [];
  let answer = 0;

  if (array.length == 1) {
    return array[0];
  }

  array.forEach((el) => {});
}

console.log(solution([1, 2, 3, 3, 3, 4]));
