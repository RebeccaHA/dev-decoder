export const addAcronym = acronym => {
  return dispatch => {
    console.log("c");
    return fetch("https://limitless-citadel-06504.herokuapp.com/acronyms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: acronym.name,
        definition: acronym.definition,
        description: acronym.description
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("d");
        data.message
          ? dispatch({ type: "POST_ERROR", errorMessage: data.message })
          : dispatch({ type: "ADD_ACRONYM", acronym: data });
      });
  };
};

export const fetchAcronyms = () => {
  return dispatch => {
    fetch("https://limitless-citadel-06504.herokuapp.com/acronyms")
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "FETCH_ACRONYMS", acronyms: data });
      });
  };
};

export const fetchFavouriteAcronyms = () => {
  return dispatch => {
    fetch("https://limitless-citadel-06504.herokuapp.com/acronyms")
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "FETCH_FAVOURITE_ACRONYMS", acronyms: data });
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
    fetch(
      `https://limitless-citadel-06504.herokuapp.com/acronyms/${acronym.id}`,
      {
        method: "PUT",
        body: JSON.stringify(acronym),
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "FAVOURITE_ACRONYM", acronym: data });
      });
  };
};

export const unfavourite = acronym => {
  return dispatch => {
    fetch(
      `https://limitless-citadel-06504.herokuapp.com/acronyms/${acronym.id}`,
      {
        method: "PUT",
        body: JSON.stringify(acronym),
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "UNFAVOURITE_ACRONYM", acronym: data });
      });
  };
};
