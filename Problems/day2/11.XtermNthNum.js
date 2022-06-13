//https://programmers.co.kr/learn/courses/30/lessons/12954

function returnList(x, n) {
  let list = [];
  for (let i = 0; i < n; i++) {
    list.push(x * (i + 1));
  }
  console.log(list);
}

returnList(-4, 3);
