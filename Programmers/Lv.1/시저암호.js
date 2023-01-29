// 시저암호 - 어떤 문장의 각 알파벳을 일정한 거리(n)만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
// ex) ab -> 1만큼 밀면 -> bc // 3만큼 밀면 -> de
// 문자열 s, 거리 n

// 1. s에서 각각의 원소에 n만큼 밀어서 다음 값을 가져오기
// 2. n만큼 밀린 새로운 값으로 문자열 만들기

function solution(s, n) {
  let getStr = s.replace(' ')
  let answerNumArr = []
  let answerArr = []
  let answer = ''
  console.log(getStr, n)
  console.log(getStr.length)

  for (i = 0; i < getStr.length; i++) {
    answerNumArr.push(getStr.charCodeAt(i) + n)
  }

  console.log(answerNumArr)
  for (i = 0; i < answerNumArr.length; i++) {
    answerArr.push()
  }
}

solution('ab', 1)
