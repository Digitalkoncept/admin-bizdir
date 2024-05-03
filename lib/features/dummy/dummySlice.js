import { createSlice } from "@reduxjs/toolkit";

const dummySlice = createSlice({
    name: "dummy",
    initialState: {
        word: "dummy",
    },
    reducers: {
        changeName: (state, action) => {
            state.word = action.payload;
        },
    },
});

export const { changeName } = dummySlice.actions;
export default dummySlice.reducer;
