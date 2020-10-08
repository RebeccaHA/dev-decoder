export function AcronymReducer(
  state = { acronyms: [], searchAcronyms: [], query: "", errorMessage: "" },
  action
) {
  switch (action.type) {
    case "ADD_ACRONYM":
      return { ...state, acronyms: [...state.acronyms, action.acronym] };

    case "FETCH_ACRONYMS":
      return { ...state, acronyms: action.acronyms };

    case "FETCH_FAVOURITE_ACRONYMS":
      return {
        ...state,
        acronyms: action.acronyms.filter(acronym => acronym.favourite === true)
      };

    case "SEARCH_ACRONYMS":
      return {
        ...state,
        searchAcronyms: state.acronyms.filter(acronym =>
          acronym.name.includes(action.payload)
        ),
        query: action.payload
      };

    case "FAVOURITE_ACRONYM":
      const newAcronyms = state.acronyms.map(acronym =>
        acronym.id !== action.acronym.id ? acronym : action.acronym
      );
      return {
        ...state,
        acronyms: newAcronyms
      };

    case "UNFAVOURITE_ACRONYM":
      const newUnFavAcronyms = state.acronyms.map(acronym =>
        acronym.id !== action.acronym.id ? acronym : action.acronym
      );
      return {
        ...state,
        acronyms: newUnFavAcronyms
      };

    case "REMOVE_ERROR":
      return { ...state, errorMessage: "" };

    case "POST_ERROR":
      console.log(action.errorMessage[0]);
      return { ...state, errorMessage: action.errorMessage[0] };

    default:
      return state;
  }
}
