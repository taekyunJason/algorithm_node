function solution(nums) {
  var answer = 0;
  let chiceCnt = nums.length / 2;
  let numsSort = nums.sort();
  let numsSortRemove = numsSort.filter(
    (val, index) => val != numsSort[index + 1]
  );
  answer = chiceCnt < numsSortRemove.length ? chiceCnt : numsSortRemove.length;
  return answer;
}
