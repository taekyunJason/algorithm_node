function solution(p) {
  let answer = 0;
  let newArr = p.sort();

  console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    if ((newArr[0] = newArr[1])) {
      let temp = 0;
      newArr[2] = temp;
      console.log(temp);
      newArr[1] = newArr[2];
      temp = newArr[1];
    }
  }
  console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < newArr[i + 1]) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([3, 2, 1, 4, 5]));
