//번호는 10자리 str -> arr
//뒤에서 4, 8번째 자리에 - 추가
//arr -> str으로 변환 + 앞에 0추가

function solution(phone) {
  let result = [];
  let num = 0;

  result = phone.split("");
  console.log(result);

  result.splice(2, 0, "-");
  result.splice(7, 0, "-");
  num = 0 + result.join("");
  console.log(num);

  return num;
}
console.log(solution("1062509911"));

//풀이
function solution(phone) {
  return (
    "0" + phone.slice(0, 2) + "-" + phone.slice(2, 6) + "-" + phone.slice(-4)
  );
}
console.log(solution("1062509911"));
