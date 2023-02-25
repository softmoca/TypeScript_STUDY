// 모듈을 작성하지 않고 그냥 작성할 경우 Global scope로 측정되어서
//다른 파일에서 이름이 충돌이 될수 있어서 Block을 이용해서 local scope로 작성

{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined  7가지
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined; // 보통은 다른 타입과 같이 사용 즉, 조로 옵셔털 타입일 경우
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null; // 보통은 다른 타입과 같이 사용 즉, 조로 옵셔털 타입일 경우

  // unknown 💩    어떤 타입을 넣을수 있다. var와 같이 가능하면 쓰지 않지않는다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩 void로 선언하면 undefined만 사용가능 💩

  // never     아무것도 반환할 수 없다. 1. 에러를 던지던지 2. 무한루프
  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩 가능하면 더욱 자세한 타입을 사용하는것이 더 좋다.
  function acceptSomeObject(obj: object) {} // 어떠한 object도 전달가능 아래 두개 등등..
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
