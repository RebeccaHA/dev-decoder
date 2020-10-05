import React from "react";

export function AuthReducers(
  state = { loggedIn: false, currentUser: {}, action }
) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        currentUser: action.payload.current_user,
        loggedIn: action.payload.logged_in
      };

    default:
      return state;
  }
}
