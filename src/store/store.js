import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer} from "./jwt/jwtSlice";

const reducers = combineReducers({
    jwt: reducer
})

export const store = configureStore({
    reducer: reducers
})