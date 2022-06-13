//https://programmers.co.kr/learn/courses/30/lessons/12969

function star(a, b) {
  let star = "*".repeat(a) + "\n";
  for (let i = 0; i < b; i++) {
    console.log(star); //console.log ⇒ 출력후에 자동으로 줄바꿈 실행
  }
}

star(5, 3);

// //풀이2
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a)
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }

// //풀이3
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

//     const star = `${'*'.repeat(a)}\n`;
//     console.log(star.repeat(b))
// });

// //풀이4
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     console.log((('*').repeat(a)+`\n`).repeat(b))
// });
