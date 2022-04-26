//상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
//상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
//상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
//상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.

function sugarDelivery(n) {
  //   let five = 0;
  //   let leftFive = 0;
  //   let three = 0;
  //   let leftThree = 0;
  //   five = Math.round(n / 5);
  //     leftFive = n % 5;
  //     three = Math.round(leftFive / 3);
  //     leftThree = three % 3;
  //   if (n % 5 !== 0 && n % 3 !== 0) {
  //     return -1;
  // }
  // if(leftFive)
}

console.log(sugarDelivery(18));

const input = +require("fs").readFileSync("/dev/stdin").toString();
// 정확하게 N킬로그램을 만들 수 없을 경우 -1을 출력하기 위함
let result = -1;

// 먼저 큰 수가 몇 개나 들어가는지 계산
let five = Math.floor(input / 5);
while (five >= 0) {
  // 큰 수를 빼고 남은 킬로그램이 얼마인지
  const remain = input - five * 5;
  // 남은 킬로그램이 3으로 나누어 떨어진다면
  if (remain % 3 === 0) {
    // 최소 개수 구하기
    result = remain / 3 + five;
    break;
  } else {
    // 3으로 나누어 떨어지지 않으면 N킬로그램을 만들 수 없음
    // 큰 수를 하나 빼주고 개수를 다시 구해줌
    five -= 1;
  }
}

// -1 혹은 구한 최소 개수 출력
console.log(result);
