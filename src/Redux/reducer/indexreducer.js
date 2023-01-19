import { combineReducers } from "redux";
import PostReducer from "./postreducer";
import dataReducer from "./reducer";

const IndexReducer = combineReducers({
  data: dataReducer,
  post: PostReducer,
  // more reducer you create
});

export default IndexReducer;
