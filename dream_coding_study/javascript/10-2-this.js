console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
//
class Counter {
  count = 0;
  increase = () => {
    // 화살표 함수를 사용하면 bind를 안써도 this의 정보를 잃지않는다.
    // console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase; //counter의 increase 포인터를 caller로 옮겨서 this의 정보를 잃어버림
//const caller = counter.increase.bind(counter); this의 정보를 잃지 않으려면 bind를 써야한다.
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
