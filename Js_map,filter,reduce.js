//1.map()
//주어진 배열값들을 오름차순으로 접근해 callback함수를 통해 새로운 값으로 재정의하고 새로운 배열을 만들어 리턴
//반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것입니다.
//어떻게 짝지어줄 것인가 정의한 함수를 메서드의 인자로 넣어주면 되는 것입니다.
//map은 배열을 1대1로 짝짓되 기존 객체를 수정하지 않고 새로운 배열을 만드는 메서드입니다.
//배열.map((요소, 인덱스, 배열) => { return 요소 });

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((numbers) => numbers * numbers);

// console.log(numbers);
// console.log(result);

//사용법
let mapEx = [1, 2, 3];
let map_result = mapEx.map(
  (numbers) =>
    //number : 요소값
    //index : source에서 요소의 index
    //source : 순회하는 대상

    //   console.log(number);
    //   console.log(index);
    //   console.log(source);
    numbers * numbers
);
console.log(mapEx);
console.log(map_result);

//주의사항
//map 함수는 객체를 직접 사용하거나 변형시키지 않지만 callbackfn을 통해 수정할 수 있으며 이는 문제를 발생시키는 원인이 됩니다.
//callbackfn이 호출되는 범위는 callbackfn이 처음 호출되기 이전이며, map이 순회하는 도중에 추가된 요소는 접근하지 않습니다. 반대로 순회하는 도중 수정이 일어나면 변경된 값이 callbackfn에 전달되고 삭제된 요소는 접근하지 않습니다.

//2.filter()
//주어진 배열에서 오름차순으로 접근해서 callback 함수에서 true를 리턴하는 element를 모아서 새로운 배열을 만들어서 리턴
//

//
//1)다중 조건 사용하기 - callback에 등록할 수 있는 함수는 boolean을 반환하기 위한 조건문을 1개이상 정의 가능

const numbers = [1, 2, 3, 4, 5]; // 1보다 크고 5보다 작은 수를 찾는다
const newNumberes = numbers.filter((number) => {
  if (number > 1 && number < 5) {
    return true;
  }
  return false;
});
console.log(newNumberes);
// [2, 3, 4]

const guys = [
  { name: "YD", money: 500000 },
  { name: "Bill", money: 400000 },
  { name: "Andy", money: 300000 },
  { name: "Roky", money: 200000 },
];
// money를 300000 이상 가진 name이 YD인 사람을 찾는다.
const rich = guys.filter((man) => {
  if (man.money > 300000) {
    if (man.name === "YD") {
      return true;
    }
  }
  return false;
});
console.log(rich);
// [{name: "YD", money: 500000}]

//
//2)고차 함수 사용하기 - 고차함수를 사용해서 미리 정의한 식을 사용할 수 있음

const numbers = [1, 2, 3, 4, 5];
// 3보다 큰 수 구하기
const graterThenThree = (value) => value > 3;
const newNumberes = numbers.filter(graterThenThree);
console.log(newNumberes);
// [4, 5]

//
//3)배열의 최고값/최소값 기준으로 분류하기 - thisArg를 통해 전달받는 인자 중에 순회하는 대상을 사용하면 min/max를 식별할 수 있음

const guys = [
  { name: "YD", money: 500000 },
  { name: "Bill", money: 500000 },
  { name: "Mark", money: 400000 },
  { name: "Andy", money: 300000 },
  { name: "Roky", money: 200000 },
  { name: "Kan", money: 100000 },
  { name: "Sam", money: 100000 },
];

const rich = guys.filter((man, index, target) => {
  const maxOfMoney = Math.max(...target.map((person) => person.money));
  return man.money === maxOfMoney;
});
console.log(rich);
// [{name: "YD", money: 500000}, {name: "Bill", money: 500000}]

const poor = guys.filter((man, index, target) => {
  const minOfMoney = Math.min(...target.map((person) => person.money));
  return man.money === minOfMoney;
});

console.log(poor);
// [{name: "Kan", money: 100000}, {name: "Sam", money: 100000}]

//
//4)중복 제거하기 - 수정하지 않는 이상 순회하는 대상(target)은 변경되지 않는다는 속성을 이용해 filter/indexOf를 조합하여 사용가능

const numbers = [1, 1, 2, 2, 3, 4, 5];
const newNumbers = numbers.filter((number, index, target) => {
  return target.indexOf(number) === index;
});
console.log(newNumbers);
// [1, 2, 3, 4, 5]

//3.reduce()
//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
//누적값이기 때문에 다양하게 활용할수 있습니다.
const oneTwoThree = [1, 2, 3];
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6
//acc(누적값)이 초깃값인 0부터 시작해서 return하는대로 누적되는 것을 볼 수 있습니다.
//초깃값을 적어주지 않으면 자동으로 초깃값이 0번째 인덱스의 값이 됩니다.
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
});
// 1 2 1
// 3 3 2
result; // 6

result = oneTwoThree.reduce((acc, cur) => {
  acc.push(cur % 2 ? "홀수" : "짝수");
  return acc;
}, []);
result; // ['홀수', '짝수', '홀수']
//초깃값을 배열로 만들고, 배열에 값들을 push하면 map과 같아집니다.
//이를 응용하여 조건부로 push를 하면 filter와 같아집니다. 다음은 홀수만 필터링하는 코드입니다.
result = oneTwoThree.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
result; // [1, 3]
