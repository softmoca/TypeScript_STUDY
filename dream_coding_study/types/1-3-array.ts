{
  // Array   두가지 방식의 배열 정의 방법
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4]; // 제네릭
  function printArray(fruits: readonly string[]) {} // fruits라는 배열은 읽을수만 있고 수정은 불가.

  // 튜플  : 배열이면서 서로 다른 타입을 가질 수 있다.
  // 튜플사용 권장 X Tuple -> interface, type alias, class
  let student: [string, number]; // 두가지의 타입을 가질 수 있다.
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // object Destructuring 구조분해 할달
}
