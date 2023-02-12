// 4인가족이 앉을수 있는 경우의 수 파악하기

// N개의 행, 10개의 열 ( 3, 4, 3 )
// S 문자열로 현재 예약된 좌석의 정보를 제공함 ('1A 2F 1C')

// 한번에 4가족이 인접해서 앉을수 있는 경우의 수
// 인접하여 앉을 수 있는 경우 : (defg) / (bcde) / (fghj)

// 1. 제공된 문자열을 잘라서 행과 열을 구분
// 2. 같은 행에서 예약된 좌석/ 남아있는 좌석을 구분
// 3. 예약된 좌석이 위의 3가지 경우의 수에 해당하는지 파악하여 카운트

function solution(N, S) {
  let newArr = []
  let sArr = []

  let arr1 = []
  let casesNum = 0

  sArr = S.split(' ').sort()
  //   console.log(sArr)

  for (let i = 0; i < sArr.length; i++) {
    newArr.push([...sArr[i]])
  }
  console.log(newArr)

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === '1') {
      arr1.push(newArr[i][1])
    }
  }
  //   console.log(arr1)

  //   if (arr1.excludes('B' && 'C' && 'D' && 'E' && 'F' && 'G' && 'H' && 'J')) {
  //     casesNum += 2
  //   } else if (arr1.excludes('D' && 'E' && 'F' && 'G')) {
  //     casesNum += 1
  //   } else if (arr1.excludes('B' && 'C' && 'D' && 'E')) {
  //     casesNum += 1
  //   } else if (arr1.excludes('F' && 'G' && 'H' && 'J')) {
  //     casesNum += 1
  //   } else {
  //     casesNum
  //   }

  console.log(casesNum)
}

solution(2, '1A 2F 1C')
