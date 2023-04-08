import { combineReducers } from "redux";
import { EmployeeReducer } from "./employees";
import { PostReducer } from "./posts";

export default combineReducers({
  employee: EmployeeReducer,
  posts: PostReducer,
});
