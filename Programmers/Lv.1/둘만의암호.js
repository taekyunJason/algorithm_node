// 문자열 s, skip     숫자 index

// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
// skip에 있는 알파벳은 제외하고 건너뜁니다.

//ex) s = aukks, skip = wbqd, index = 5
// => happy

//풀이순서
//1. s/ skip 배열로 풀어놓기
//2. s에서 반복문을 돌며 1씩 index 만큼 더하기
//3. 더한 값이 skip 배열에 속하는 글자라면 속한 갯수만큼 더 더하기
//4. 해당 값을 더한 값을 문자열로 치환

function solution1(s, skip, index) {
  let getAlphabet = [...s]
  let getSkipAlphabet = [...skip]
  let movedAlphabet = []

  console.log(getAlphabet, getSkipAlphabet)

  for (let i = 0; i < getAlphabet.length; i++) {
    String.fromCharCode(getAlphabet[i] + index)

    movedAlphabet.push(
      String.fromCharCode(getAlphabet[i].charCodeAt(0) + index)
    )
  }

  console.log('this is movedAlphabet => ', movedAlphabet)
  console.log(getSkipAlphabet.includes('b'))
}

function solution(s, skip, index) {
  // 1) filter 함수를 사용하여 skip문자를 제거 배열을 반환 받는다.
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter((a) => !skip.includes(a))

  // 2) map 함수를 사용하여  (현재 알파벳) + index에 위차한 값을 반환한다.
  return s
    .split('')
    .map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length])
    .join('')
}

console.log(solution('aukks', 'wbqd', 5))
