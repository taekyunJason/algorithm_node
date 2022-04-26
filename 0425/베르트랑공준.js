//베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.
//이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.
//예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)
//자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.
//각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

//n< x <2n => 사이에 포함되는 소수 갯수 구하기
// 소수 구하는 방법, 에라토스테네스의 체

function solution(n) {
  let arr = [];
  for (let i = n; i < n * 2 + 1; i++) {
    arr.push(true);
  }

  for (let i = 2; i * i <= 2 * n; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j <= 2 * n; j += i) {
        arr[i] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);

  const result = arr.filter((value) => {
    return value !== false;
  });
  return result.length;
}

console.log(solution(10));
