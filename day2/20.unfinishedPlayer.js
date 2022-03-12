//https://programmers.co.kr/learn/courses/30/lessons/42576

function unfinished(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      console.log(participant[i]);
    }
  }
}

unfinished(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

// //풀이2
// function solution(participant, completion) {
//   const map = new Map();

//   for (let i = 0; i < participant.length; i++) {
//     let a = participant[i],
//       b = completion[i];

//     map.set(a, (map.get(a) || 0) + 1);
//     map.set(b, (map.get(b) || 0) - 1);
//   }

//   for (let [k, v] of map) {
//     if (v > 0) return k;
//   }

//   return "nothing";
// }

// //풀이3
// function solution(participant, completion) {
//   var dic = completion.reduce(
//     (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
//     {}
//   );
//   return participant.find((t) => {
//     if (dic[t]) dic[t] = dic[t] - 1;
//     else return true;
//   });
// }
