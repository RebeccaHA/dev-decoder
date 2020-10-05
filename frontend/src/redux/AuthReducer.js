export function AuthReducer(
  state = { loggedIn: false, currentUser: {} },
  action
) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        currentUser: action.payload.current_user,
        loggedIn: action.payload.logged_in
      };

    case "SIGN_UP":
      return {
        ...state,
        currentUser: action.payload.current_user,
        loggedIn: action.payload.logged_in
      };

    default:
      return state;
  }
}
