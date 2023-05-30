// 2보다 큰 모든 짝수는 두개의 소수의 합으로 표시할 수 있음
// 해당 파티션을 출력하는 코드 작성

const randomNum = 100

function solution(randomNum) {
  let answer = []
  let goldbachPartition = []
  //참거짓 판별 변수
  let isPrime = true
  //2부터 임의의 값까지 반복문 수행
  for (let i = 2; i < randomNum; i++) {
    // 2부터 i까지 반복문 수행
    for (let j = 2; j < i; j++) {
      // i가 j의 배수인 경우
      if (i % j === 0) {
        isPrime = false
      }
    }
    // 이외의 경우
    if (isPrime) {
      // answer 배열에 i를 푸시
      answer.push(i)
    }
    isPrime = true
  }

  // answer 배열만큼 반복문 수행
  for (i of answer) {
    // answer 배열안에 임의의 값 - i가 있는 경우인지 && i가 임의의 값 - i 이하인 경우
    if (answer.includes(randomNum - i) && i <= randomNum - i) {
      // 골드바흐 배열에 푸시
      goldbachPartition.push([i, randomNum - i])
    }
  }
  // console.log(goldbachPartition)
  return goldbachPartition
}

console.log(solution(randomNum))
