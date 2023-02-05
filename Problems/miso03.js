// 예약석이 a/k이면 2리턴
// 예약석이 가운데(defg)에 앉히거나/

//1. 예약이 a/k열 만 포함된 경우 - 2리턴
//2. 가운데(defg) 열이 포함되면 [0,1]에 포함되면 뒤에 4자리 검사후 빈경우 리턴1
//2. 가운데(defg) 열이 포함되면 [0,1]에 포함되면 앞에 4자리 검사후 빈경우 리턴1

//2-1. 가운데(defg)가 비어있으면 1리턴

//처음에 공백이 연속으로 4개 있는지 파악

// 문자열 분리
// if(열에 a/k만 있는 경우 - 2)
// else{
// if(b/c/d/e)가 없는 경우 - 1
// if(d/e/f/g)가 없는 경우 - 0
// if(f/g/h/j)가 없는 경우 - 1

// }

// if(d/e/f/g)가 빈 경우 - 1
// if(b/c/d/e)가 빈 경우 - if(f/g/h/j)가 빈 경우 2
// if(b/c/d/e)가 빈 경우 - if(f/g/h/j)가 예약된 경우 1

// if(f/g/h/j)가 빈 경우 - if(b/c/d/e)가 빈 경우

//b-j까지 빈 경우 - 2리턴

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
  console.log(arr1)

  if (arr1.excludes('B' && 'C' && 'D' && 'E' && 'F' && 'G' && 'H' && 'J')) {
    casesNum += 2
  } else if (arr1.excludes('D' && 'E' && 'F' && 'G')) {
    casesNum += 1
  } else if (arr1.excludes('B' && 'C' && 'D' && 'E')) {
    casesNum += 1
  } else if (arr1.excludes('F' && 'G' && 'H' && 'J')) {
    casesNum += 1
  } else {
    casesNum
  }

  console.log(casesNum)
}

solution(2, '1A 2F 1C')
