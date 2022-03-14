function checkRoot(num) {
  let root = Math.sqrt(num);
  return root % 1 == 0 ? Math.pow(Math.sqrt(num) + 1, 2) : -1;
  console.log(root);
}

checkRoot(121);

//풀이2
function nextSqaure(n) {
  //함수를 완성하세요
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no";
  }
}
