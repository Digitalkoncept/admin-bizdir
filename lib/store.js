import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dummySlice from "./features/dummy/dummySlice";
import authSlice from "./features/auth/auth";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["jwt", "user"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({ serializableCheck: false }),
});

export const store = configureStore({
    reducer: rootReducer,
});
