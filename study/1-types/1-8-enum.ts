{
  /**
   * Enum
    여러가지 상수 값을 한곳에 모아서 타입이 보장되고 타압의 값이 변화되지 않으므로 안전하다
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  // 여러가지 상수 값을 한곳에 모아서 타입이 보장되고 타압의 값이 변화되지 않으므로 안전하다

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, //자동으로 0부터 시작
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
// 타입스크립트에서 enum은 지양한다.
// 이유 : enum타임의 변수는 어떤 숫자도 들어올수 있다.
// ==> 타입스크립트에서는 enum보다는 union을 자주쓴다.
