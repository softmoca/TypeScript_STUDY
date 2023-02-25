{
  /**
   * Type Assertions 💩지양하자 !
   * 나는 이 변수의 타입을 확신한다 !   as 사용 혹은 변수 뒤에 !를 붙이기
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱
}
