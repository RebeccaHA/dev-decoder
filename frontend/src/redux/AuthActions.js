export const SignUp = (user, history) => {
  return dispatch => {
    return fetch("https://limitless-citadel-06504.herokuapp.com/users", {
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
    return fetch("https://limitless-citadel-06504.herokuapp.com/sessions", {
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
    return fetch("https://limitless-citadel-06504.herokuapp.com/logged_in", {
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
    return fetch("https://limitless-citadel-06504.herokuapp.com/logout", {
      method: "DELETE",
      credentials: "include"
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "LOGOUT"
        });
      });
  };
};
