import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AddPost } from "../services/AddPost"


const initialState = {
    posts: [],
    loading: false,
    error: null
}

export const loadPosts = createAsyncThunk("posts/loadPosts",
    async ({ token, postData }, thunkAPI) => {
        try {
            const res = await AddPost({ token, postData });
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [loadPosts.pending]: (state) => {
            state.loading = true;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload
        },
        [loadPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})



export default postsSlice.reducer;