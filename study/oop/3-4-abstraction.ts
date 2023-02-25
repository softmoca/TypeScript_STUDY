//인터페이스가 없을 경우 객체를 생성하고  .으로 무슨 함수를 사용할지 보면
//너무 많은 함수가 있어서 무슨 순서로 사용해야하는지 혼동스럽지만
//인터페이스를 사용하면 .을 눌렀을 경우 하나의 함수를 통해 다형성이 구현된 다양한 함수를 사용가능(오버라이딩)

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {} //특정 인터페이스만 인자로 받을 수 있다.
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {} //특정 인터페이스만 인자로 받을 수 있다.
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32); //CoffeeMachine은 인터페이스 두개 구현
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
  // 즉 동일한 클래스의 인스턴스 일지라도 그 클래스는 두가지의 인터페이스를 구현하기 때문에
  // AmateurUser와 ProBarista는 CoffeeMachine을 받아 오는것이 아니라
  //각각 CoffeeMaker과 CommercialCoffeeMaker라는 인터페이스를 생성자로 부터 받아온다.

  // const maker2 : CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(32);
  // maker2.makeCoffee(2);        이렇게 인터페이스 별로 사용할수 있는 메소드의 범위를 제한 가능
}
