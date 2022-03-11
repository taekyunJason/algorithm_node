//https://programmers.co.kr/learn/courses/30/lessons/12903

function getMidStr(str) {
  let midStr = "";
  let len = str.length;
  if (len % 2 == 0) {
    midStr = str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    midStr = str[Math.floor(str.length / 2)];
  }
  console.log(midStr);
}

getMidStr("12345");
