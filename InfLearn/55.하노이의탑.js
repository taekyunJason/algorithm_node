// 하노이의 탑

// 순회 경로
let route = []

// 원반의 수, 시작기둥/ 목표기둥/ 보조기둥
function hanoi(num, start, end, temp) {
  if (num === 1) {
    route.push([start, end])
    return 1
  }
  // 원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, temp, end)
  //가장큰 원반은 목표기둥으로
  route.push([start, end])
  // 경유기둥과 시작기둥을 바꾼다
  hanoi(num - 1, temp, end, start)
}

hanoi(3, 'A', 'C', 'B')
console.log(route)
console.log(route.length)
