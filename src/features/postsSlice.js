import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AddPost } from "../services/AddPost"
import { GetAllPosts } from "../services/GetAllPosts";
import { LikePost } from "../services/LikePost";


const initialState = {
    posts: [],
    loading: false,
    error: null,
    status: "idle"

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

export const loadAllPosts = createAsyncThunk("posts/loadAllPosts",
    async (thunkAPI) => {
        try {
            const res = await GetAllPosts();
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })

export const loadLike = createAsyncThunk("posts/loadLike",
    async ({ token, id }, thunkAPI) => {
        try {
            const res = await LikePost({ token, id });
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
            state.posts = action.payload;
        },
        [loadPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [loadAllPosts.pending]: (state) => {
            state.loading = true;
            state.status = "pending"
        },
        [loadAllPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.status = "fulfilled";
        },
        [loadAllPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.status = "rejected"
        },
        [loadLike.pending]: (state) => {
            state.loading = true;
        },
        [loadLike.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [loadLike.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }

    }
})



export default postsSlice.reducer;