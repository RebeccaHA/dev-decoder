export function acronymReducer(state = { acronyms: [] }, action) {
  switch (action.type) {
    case "ADD_ACRONYM":
      return { ...state, acronyms: [...state.acronyms, action.acronym] };

    default:
      return state;
  }
}
