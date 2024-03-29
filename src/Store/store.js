import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import postsReducer from "../features/postsSlice"
import userReducer from "../features/UserSlice";
import modeReducer from "../features/modeSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        users: userReducer,
        mode: modeReducer

    },

})