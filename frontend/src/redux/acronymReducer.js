export function acronymReducer(state = { acronyms: [] }, action) {
  switch (action.type) {
    case "ADD_ACRONYM":
      console.log(action.acronym);
      return { ...state, acronyms: [...state.acronyms, action.acronym] };

    case "FETCH_ACRONYMS":
      return { ...state, acronyms: action.acronyms };

    default:
      return state;
  }
}
