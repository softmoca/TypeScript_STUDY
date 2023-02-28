{
  /**
   * Type Aliases  // 새로운 타입을 내가 정의 할 수있다.
   */
  type Num = number;
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
    // age_number : 12,  에러
    // ture: boolean,
  };

  /**
   * String Literal Types
   */
  type Name = "naaammme"; // Name이라는 타입은 " "사이에 들어있는 틀정 문자열만 사용가능
  let ellieName: Name;
  ellieName = "naaammme";
  type JSON = "jsonnnnnnnnnn";
  const json: JSON = "jsonnnnnnnnnn";

  type Boal = true;
}
