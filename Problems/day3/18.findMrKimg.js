function findMrKim(str) {
  let kim = "Kim";
  let position = str.indexOf(kim);
  console.log("김서방은 " + position + "에 있다");
}

findMrKim(["Jane", "Kim"]);

//풀이2
function findKim(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}
