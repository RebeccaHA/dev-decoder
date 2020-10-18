export const SignUp = (user, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        user: user
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "SUCCESS",
          payload: { loggedIn: data.logged_in, currentUser: data.user }
        });
        history.push("/");
      });
  };
};

export const LogIn = (user, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        user: user
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "SUCCESS",
          payload: { loggedIn: data.logged_in, currentUser: data.user }
        });
        history.push("/");
      });
  };
};
