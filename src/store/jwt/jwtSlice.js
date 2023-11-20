import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    jwt: null
}

export const jwtSlice = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        toggleJwt: (state = initialState, {payload}) => {
            state.jwt = payload
        }
    }
})

export const {actions, reducer} = jwtSlice