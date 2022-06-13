//https://programmers.co.kr/learn/courses/30/lessons/86491
//[[60,50],[30,70],[60,30],[80,40]]

function findMinSqare(sizes) {
  let [hor, ver] = sizes.reduce(
    //처음부터 [가로, 세로]배열에서 초기바열을 합해준다
    ([h, v], [a, b]) => [
      //인덱스 0번 1번에
      Math.max(h, Math.max(a, b)), //인덱스[0][0]번과 인덱스 1번의 최대값(가로)을 비교
      Math.max(v, Math.min(a, b)), //인덱스[0][1]번과 인덱스 1번의 최소값(자동으로 세로)을 비교
    ], //위의 과정을 거쳐서 [제일 큰 값, 1차 배열 원소 둘 중 작은 원소들 중에서 제일 큰 값]
    [0, 0] //초깃값 설정
  );
  return hor * ver;
}

console.log(
  findMinSqare([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
