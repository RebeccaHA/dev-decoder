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

export const checkLoggedIn = () => {
  return dispatch => {
    return fetch("http://localhost:3000/logged_in", {
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "SUCCESS",
          payload: { loggedIn: data.logged_in, currentUser: data.user }
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    return fetch("http://localhost:3000/logout", {
      method: "DELETE",
      credentials: "include"
    }).then(resp =>
      dispatch({
        type: "LOGOUT"
      })
    );
  };
};
