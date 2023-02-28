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
