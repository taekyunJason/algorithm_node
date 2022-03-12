//https://programmers.co.kr/learn/courses/30/lessons/12916

function countAlpha(arr) {
  let num_p = 0;
  let num_y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "p" || arr[i] == "P") {
      num_p++;
    } else if (arr[i] == "y" || arr[i] == "Y") {
      num_y++;
    }
  }
  num_p == num_y ? console.log("True") : console.log("False");
  if (num_y == 0 && num_p == 0) {
    console.log("true");
  }
}

countAlpha("Pyy");

//풀이2
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
