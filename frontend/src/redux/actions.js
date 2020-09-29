export const addAcronym = acronym => {
  return { type: "ADD_ACRONYM", acronym };
};

export const fetchAcronyms = () => {
  return dispatch => {
    fetch("http://localhost:3000/acronyms")
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson);
        dispatch({ type: "FETCH_ACRONYMS", acronyms: respJson });
      });
  };
};
