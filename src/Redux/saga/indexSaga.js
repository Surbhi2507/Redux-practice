import { takeLatest } from "redux-saga/effects"
import { Post_Type } from "../type"
import PostSaga from "./postSaga"

function* indexSaga(){
yield takeLatest(Post_Type,PostSaga)
// more saga function you create 
}
export default indexSaga