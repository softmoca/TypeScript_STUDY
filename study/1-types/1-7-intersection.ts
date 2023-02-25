{
  /**
   * Intersection Types: &     //and로 이해 ! union과 거의 반대
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    //Student,Worker의 모든 데이터를 인자로 넘겨줘야한다.
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
