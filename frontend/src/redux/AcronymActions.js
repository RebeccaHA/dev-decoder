export const addAcronym = acronym => {
  return dispatch => {
    return fetch("http://localhost:3000/acronyms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        acronym: acronym
      })
    })
      .then(response => response.json())
      .then(data => {
        data.message
          ? dispatch({ type: "POST_ERROR", errorMessage: data.message })
          : dispatch({ type: "ADD_ACRONYM", acronym: data });
      });
  };
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
