function divisible(arr, div) {
  let answer = arr.sort((a, b) => a - b);
  answer = arr.filter((arr) => arr % div === 0);
  console.log(answer.length);

  answer.length === 0 ? answer.push(-1) : console.log(answer);
  console.log(answer);
  //   if (answer.length == 0) {
  //     answer.push(-1);
  //     console.log(answer);
  //   } else {
  //     console.log(answer);
  //   }
}

divisible([3, 2, 6], 10);

//배열 숫자 오름차순 내림차순 정렬
// const numbers = [15, 52, 23, 11, 9];
// // 오름차순 정렬, 원본 배열 수정
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// // [9, 11, 15, 23, 52]

// // 내림차순 정렬, 원본 배열이 다시 수정
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// // [52, 23, 15, 11, 9]

// let arr = [1, 2, 3];
// console.log(arr.push(-4));
