export function acronymReducer(state = { acronyms: [] }, action) {
  switch (action.type) {
    case "ADD_ACRONYM":
      return { ...state, acronyms: [...state.acronyms, action.acronym] };

    case "FETCH_ACRONYMS":
      return action.acronyms;

    default:
      return state;
  }
}
