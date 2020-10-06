export function AuthReducer(
  state = { loggedIn: false, currentUser: {} },
  action
) {
  switch (action.type) {
    case "LOGGED_IN":
      debugger;
      return {
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      };

    case "SIGN_UP":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      };

    default:
      return state;
  }
}
