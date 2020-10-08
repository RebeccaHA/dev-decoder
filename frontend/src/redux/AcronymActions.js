export const addAcronym = acronym => {
  return dispatch => {
    return fetch("http://localhost:3000/acronyms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        acronym
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

export const fetchFavouriteAcronyms = () => {
  return dispatch => {
    fetch("http://localhost:3000/acronyms")
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson);
        dispatch({ type: "FETCH_FAVOURITE_ACRONYMS", acronyms: respJson });
      });
  };
};

export const removeError = () => {
  return dispatch => {
    dispatch({ type: "REMOVE_ERROR" });
  };
};

export const favourite = acronym => {
  return dispatch => {
    fetch(`http://localhost:3000/acronyms/${acronym.id}`, {
      method: "PUT",
      body: JSON.stringify(acronym),
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "FAVOURITE_ACRONYM", acronym: data });
      });
  };
};

export const unfavourite = acronym => {
  return dispatch => {
    fetch(`http://localhost:3000/acronyms/${acronym.id}`, {
      method: "PUT",
      body: JSON.stringify(acronym),
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "UNFAVOURITE_ACRONYM", acronym: data });
      });
  };
};
