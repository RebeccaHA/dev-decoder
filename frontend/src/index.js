import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { acronymReducer } from "./redux/acronymReducer";
import { AuthReducer } from "./redux/AuthReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  acronyms: acronymReducer,
  users: AuthReducer
});
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
