//https://programmers.co.kr/learn/courses/30/lessons/12919

function findMrKim(arr) {
  let pos_kim = "Kim";
  console.log("김서방은 " + arr.indexOf(pos_kim) + "에 있다");
}

findMrKim(["Jane", "Kim"]);

//풀이2
function findKim(seoul) {
  console.log("김서방은 " + seoul.indexOf("Kim") + "에 있다");
}

//.indexOf 사용할때 체크할 Array를 입력해야함!
