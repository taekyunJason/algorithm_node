function addNum(num) {
  let answer = 0;

  while (num > 0) {
    answer += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(answer);
}

addNum(12345);

//풀이2
function solution(num) {
  let answer = 0;
  let word = String(num);

  for (let i = 0; i < word.length; i++) {
    answer += parseInt(word[i]);
  }
  console.log(answer);
}

//풀이3
function solution1(n) {
  var a = (n + "").split("");
  var b = 0;
  for (var i = 0; i < a.length; i++) {
    b += parseInt(a[i]);
  }
  console.log(b);
  //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}
