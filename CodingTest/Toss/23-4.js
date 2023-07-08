const table = {
  cho: [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ],
  jung: [
    'ㅏ',
    'ㅐ',
    'ㅑ',
    'ㅒ',
    'ㅓ',
    'ㅔ',
    'ㅕ',
    'ㅖ',
    'ㅗ',
    'ㅘ',
    'ㅙ',
    'ㅚ',
    'ㅛ',
    'ㅜ',
    'ㅝ',
    'ㅞ',
    'ㅟ',
    'ㅠ',
    'ㅡ',
    'ㅢ',
    'ㅣ',
  ],
  jong: [
    '',
    'ㄱ',
    'ㄲ',
    'ㄳ',
    'ㄴ',
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ',
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ],
};

/**
 * 한글을 분해해 초성 중성 종성 Index를 반환합니다
 *
 * @param hangul 한글로 이루어진 글자 하나
 * @returns [초성Index, 중성Index, 종성Index]
 */
function decompositeHangulCode(hangul) {
  const char = hangul.charCodeAt() - 0xac00;
  const cho = Math.floor(char / (28 * 21));
  const jung = Math.floor((char / 28) % 21);
  const jong = Math.floor(char % 28);
  return [cho, jung, jong];
}

/**
 * 가장 많이 사용하는 자음과 갯수를 콤마로 반환하는 함수입니다
 *
 * @param input 한글로만 구성되어 있는 글자입니다
 * @returns 주어진 글자에서 가장 많이 사용되는 자음과 갯수를 콤마로 반환
 */
function getMostJaumPair(input) {
  const maxChar = '';
  const maxLength = 0;
  console.log(input);
  console.log(decompositeHangulCode(input));
  return `${maxChar},${maxLength}`;
}

// 해당 부분을 수정하시면, 채점이 어려울 수 있습니다.
const solution = getMostJaumPair('라디오');
