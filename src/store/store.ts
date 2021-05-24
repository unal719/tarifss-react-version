import { tariffReduce } from "./reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

const rootReduce = combineReducers({
  tariff: tariffReduce,
});

export type RootState = ReturnType<typeof rootReduce>;
export const store = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState>))
);
