import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jwt: "",
    user: {
        name: "",
        email: "",
        is_verified: false,
        image: "",
        role: "",
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUserDetails: (state, action) => {
            state.jwt = action.payload.jwt;
            state.user = action.payload.user;
        },
        logoutUser: (state, action) => {
            state.user = initialState.user;
            state.jwt = "";
        },
    },
});

export const { loginUserDetails, logoutUser } = authSlice.actions;
export default authSlice.reducer;
