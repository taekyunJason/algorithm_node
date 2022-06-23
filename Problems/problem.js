// A = [0,1,0,1,1] => 5
// A.length = 5;
// 0을 가진 값의 index = 0,2
// 1을 가진 값의 index = 1,3,4

// (0을 가진 값의 index <= 1을 가진 값의 index)

function getCombinations(arr, selectNum) {
  let answer = [];
  if (selectNum === 1) {
    return arr.map((v) => [v]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    answer.push(...attached);
  });

  return answer;
}

const arr = [1, 2, 3, 4, 5];

const answer = getCombinations(arr, 2);
console.log(answer);
