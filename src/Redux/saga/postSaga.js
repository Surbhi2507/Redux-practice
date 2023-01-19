import { call, put } from 'redux-saga/effects'
import { postServices } from '../services/service'
import { Post_Error, Post_Success } from '../type';

function* PostSaga() {
    console.log('saga')
    try {
        const data = yield call(postServices);
        if (data) yield put({ type: Post_Success, payload: data })
        else yield put({ type: Post_Error, payload: data })
    }
    catch (e) {
        yield put({ type: Post_Error, payload: e })
    }
}
export default PostSaga