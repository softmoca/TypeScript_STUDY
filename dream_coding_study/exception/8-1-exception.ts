// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!💩";

  try {
    // 에러가 발생할 수 있는 부분은  try로 감싼다.
    console.log(readFile(fileName));
  } catch (error) {
    //catch로 잡으면 어플리케이션이 죽지는 않는다.
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
