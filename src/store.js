import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root";
import logMiddleware from "./middleware/logs";
import apiMiddleware from "./middleware/api";

const store = createStore(
  rootReducer,
  applyMiddleware(logMiddleware, apiMiddleware)
);

window.store = store;

export default store;
