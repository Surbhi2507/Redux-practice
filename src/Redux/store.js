import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "./reducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    version:1,
    storage,
}



const rootReducer = (state,action) =>dataReducer(state,action)

// const persistedReducer = persistReducer(persistConfig,rootReducer)


const practicestore = configureStore(
    {reducer:rootReducer},
)
export default practicestore;