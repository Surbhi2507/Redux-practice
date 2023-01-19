import { Post_Error, Post_Success, Post_Type } from "../type";

const intialState = {
  post: [],
  error: "",
};
const PostReducer = (state = intialState, action) => {
    console.log('reducer')
  switch (action.type) {
    case Post_Type:
      return {
        ...state,
      };
    case Post_Success:
      return {
        ...state,
        post: action.payload,
        error: "",
      };
    case Post_Error:
      return {
        ...state,
        post: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default PostReducer;
