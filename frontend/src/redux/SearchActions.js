export const SearchAcronyms = query => dispatch => {
  dispatch({ type: "SEARCH_ACRONYMS", payload: query });
};
