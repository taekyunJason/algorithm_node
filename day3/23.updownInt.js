function updown(num) {
  let strNum = num + "";
  let arr = [];
  for (let i = strNum.length - 1; i >= 0; i--) {
    arr.push(parseInt(strNum[i]));
  }
  console.log(arr);
}
updown(12345);

//풀이2
function solution(n) {
  // var arr = [];
  // for (var i=0; i<n.length; i++) {
  //     arr.push(n[i]);
  //     console.log(n[i]);
  // }
  // console.log(arr);
  // console.log('---------')
  // return n.toString().split('').sort((a, b) => b > a).map(o => o = parseInt(o));
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}

//풀이3
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}
