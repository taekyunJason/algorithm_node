//1.map()
//주어진 배열값들을 오름차순으로 접근해 callback함수를 통해 새로운 값으로 재정의하고 새로운 배열을 만들어 리턴

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
