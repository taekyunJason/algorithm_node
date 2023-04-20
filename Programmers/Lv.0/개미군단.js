// 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록
// 장군 = 5, 병정 = 3, 일 = 1

function solustion(hp) {
  let general = 0
  let soldier = 0
  let normal = 0

  general = Math.floor(hp / 5)
  soldier = Math.floor((hp % 5) / 3)
  normal = Math.floor((hp % 5) % 3)

  return general + soldier + normal
}

console.log(solustion(999))
