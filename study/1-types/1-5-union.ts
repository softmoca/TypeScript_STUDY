{
  /**
   *  Union Types: OR  // or로 이해하면 충분하다 !
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  //--------------------------------------------------------------
  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  // 보통은 로그인 기능은 네트워크 통신을해서 비동기인 promise를 반환하겠지만 우선은 간단한 예시 !
  function login(): LoginState {
    return {
      //성공할 경우
      response: {
        body: "logged in!",
      },
    };
  }
  //--------------------------------------------------------------
  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  //state.reson처럼 코드 작성 시에는 state에 뭐가 있는지 모른다. 그래서 아래와 같이 작성
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}

{
  // discriminated union을 사용하여 리팩토링 ==> 직관적인 코드 작성 가능
  //union타입의 차별화 되는 이름이 동일한 타입을 둠으로써 간판하게 구분 !
  //-------------------------------------------------------------------------
  // function: login -> success, fail ⏱
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      // 모든 state에서 공통적으로 result를 가지고 있어서 가능.
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
