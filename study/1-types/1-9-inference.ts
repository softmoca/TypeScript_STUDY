/**
 * Type Inference  추론이 되지만 그대로 모든 변수는 :타입 을 지정해 는걸 지향
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
