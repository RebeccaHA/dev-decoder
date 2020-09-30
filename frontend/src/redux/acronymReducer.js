export function acronymReducer(
  state = { acronyms: [], searchAcronyms: [], query: "" },
  action
) {
  switch (action.type) {
    case "ADD_ACRONYM":
      console.log(action.acronym);
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

    default:
      return state;
  }
}
