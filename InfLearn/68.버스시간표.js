// 입력 : ["12:30", "13:20", "14:13"]
// 현재 : "12:40"
// 출력 : ['지나갔습니다.', '00시간 40분', '01시간 33분']

// 입력시간이 주어지면 현재시간을 기준으로 출력과 같이 00시간 00분의 형태로 출력하기

// 처음에 현재시간과 나의 시간에 대한 변수 설정 및 할당
let curTime = '12:40'
let myTime = ['12:30', '13:20', '14:13']

function solution(curTime, myTime) {
  let answer = []
  let hour = 0
  let min = 0

  // 현재시간을 분으로 모두 환산
  curTime = curTime.split(':').map((n) => parseInt(n, 10))
  curTime = curTime[0] * 60 + curTime[1]

  // 반복문을 돌면서 배열에 담긴 나의 시간도 모두 분으로 환산
  for (i in myTime) {
    let time = myTime[i].split(':').map((n) => parseInt(n, 10))
    time = time[0] * 60 + time[1]

    // 만약 현재시간이 나의 시간보다 크다면, '지나갔습니다.' 라는 문자열 추가
    if (curTime > time) {
      answer.push('지나갔습니다.')
    }
    // 아니라면 분으로 나온 time 값을 시간과 분으로 분할하기
    else {
      hour = parseInt((time - curTime) / 60, 10)
      min = parseInt((time - curTime) % 60, 10)

      // 시간과 분으로 분할한 값을 padStart로 한자리 숫자일 때, 앞에 0을 붙여서 출력하기
      answer.push(
        String(hour).padStart(2, 0) +
          '시간 ' +
          String(min).padStart(2, 0) +
          '분'
      )
    }
  }
  return answer
}

console.log(solution(curTime, myTime))
