import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    user: "",
    accessToken: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAccessTocken: (state, action) => {
            state.accessToken = action.payload
        },
        clearUser: (state) => {
            state.user = null
        },
    }
})
export const { setUser, setAccessTocken, clearUser } = loginSlice.actions;
export default loginSlice.reducer;