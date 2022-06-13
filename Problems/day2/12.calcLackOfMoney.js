//https://programmers.co.kr/learn/courses/30/lessons/82612

function calc(price, money, count) {
  let lack = 0;
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  lack = Math.abs(totalPrice - money);
  totalPrice > money ? console.log(lack) : console.log(0);
}

calc(3, 20, 4);

//풀이2 - 1~count 까지의 합 X price - money
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
