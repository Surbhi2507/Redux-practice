import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import IndexReducer from "./reducer/indexreducer";
import createSagaMiddleware from "@redux-saga/core";
import indexSaga from "./saga/indexSaga";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}



const rootReducer = (state, action) => IndexReducer(state, action)

// const persistedReducer = persistReducer(persistConfig,rootReducer)

const sagaMiddleware = createSagaMiddleware()
const practicestore = configureStore(
    { reducer: rootReducer, middleware: [sagaMiddleware] }
)
sagaMiddleware.run(indexSaga)
export default practicestore;