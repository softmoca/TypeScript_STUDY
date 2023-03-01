//utility  Types
// index 타입을 이용하면 다른 타입에 있는 키에 접근해서 그 키의 value의 타입을 그대로 선언가능
{
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
