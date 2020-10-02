export function acronymReducer(
  state = { acronyms: [], searchAcronyms: [], query: "", errorMessage: "" },
  action
) {
  switch (action.type) {
    case "ADD_ACRONYM":
      return { ...state, acronyms: [...state.acronyms, action.acronym] };

    case "FETCH_ACRONYMS":
      return { ...state, acronyms: action.acronyms };

    case "SEARCH_ACRONYMS":
      return {
        ...state,
        searchAcronyms: state.acronyms.filter(acronym =>
          acronym.name.includes(action.payload)
        ),
        query: action.payload
      };

    case "POST_ERROR":
      console.log(action.errorMessage[0]);
      return { ...state, errorMessage: action.errorMessage[0] };

    default:
      return state;
  }
}
