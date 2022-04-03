//https://programmers.co.kr/learn/courses/30/lessons/12977
//배열에서 서로다른 3개를 골라 더했을때 소수가 되는 경우의 수를 리턴

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function createPrimeNum(arr) {
  let len = arr.length;
  let answer = 0;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isPrime(arr[i] + arr[j] + arr[k])) {
          answer++;
        }
      }
    }
  }
  return answer;
}

console.log(createPrimeNum([1, 2, 7, 6, 4]));

//풀이
function solution(nums) {
  let answer = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }
  return answer;
}

function isPrime(sum) {
  for (let i = 2; i < sum; i++) if (sum % i === 0) return false;
  return sum > 1;
}
