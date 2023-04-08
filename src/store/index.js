import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
// export const store = createStore(reducer);
import thunk from "redux-thunk";
// import { devToolsEnhancer } from "redux-devtools-extension";
export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
// export const store = createStore(
//   reducer,
//   devToolsEnhancer()
//   // Specify custom devTools options
// );
