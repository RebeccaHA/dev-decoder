export const SignUp = user => {
  return dispatch => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user
      })
    })
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson);
        dispatch({ type: "SIGN_UP", user: respJson });
      });
  };
};

export const LogIn = user => {
  return dispatch => {
    return fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user
      })
    })
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson);
        dispatch({ type: "LOGGED_IN", user: respJson });
      });
  };
};
