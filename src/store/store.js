import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {
  user: {
    name: "",
    id: "",
    avatar: "",
    authenticated: false,
  },
  app: {
    isLoading: false,
    error: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
export default store;
