// 분자1, 분모1, 분자2, 분모2 에서 두개의 분수를 합하기

function calc_gcd(num1, num2) {
  //최대공약수 구하기
  //1. a를 b로 나누기. 나누어진다면 b가 최대 공약수 (a>b)
  //2. 나누어 떨어지지 않는다면, b와 a%b를 다시 나눈다.
  //3. 서로가 나누어진다면 a%b가 최대 공약수
  return num1 % num2 === 0 ? num2 : calc_gcd(num2, num1 % num2)
}

function solution(numer1, denom1, numer2, denom2) {
  // 분모
  let denom = denom1 * denom2
  // 분자
  let number = numer1 * denom2 + numer2 * denom1

  let gcd = calc_gcd(number, denom)

  // 최대공약수로 분자, 분모를 나누고 배열에 넣기
  return [number / gcd, denom / gcd]
}

console.log(solution(9, 2, 1, 3))
