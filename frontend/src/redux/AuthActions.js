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
      .then(data => {
        dispatch({
          type: "SIGN_UP",
          payload: { loggedIn: data.logged_in, currentUser: data.user }
        });
      });
  };
};

export const LogIn = user => {
  return dispatch => {
    return fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "LOGGED_IN",
          payload: { loggedIn: data.logged_in, currentUser: data.user }
        });
      });
  };
};
