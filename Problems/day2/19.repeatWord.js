//https://programmers.co.kr/learn/courses/30/lessons/12922

function repeatWord(n) {
  console.log("수박".repeat(n).slice(0, n));
}

repeatWord(6);

// //풀이2
// const waterMelon = (n) => {
//   return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
// };

// //풀이3
// const waterMelon = (n) => "수박".repeat(n).slice(0, n);
