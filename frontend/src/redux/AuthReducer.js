export function AuthReducer(
  state = { loggedIn: false, currentUser: {} },
  action
) {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        currentUser: action.payload.currentUser,
        loggedIn: action.payload.loggedIn
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        currentUser: {}
      };
    default:
      return state;
  }
}
