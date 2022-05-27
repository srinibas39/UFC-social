import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { AddComment } from "../services/AddComment";
import { AddPost } from "../services/AddPost"
import { DeletePost } from "../services/DeletePost";
import { DislikePost } from "../services/DislikePost";
import { EditComment } from "../services/EditComment";
import { GetAllPosts } from "../services/GetAllPosts";
import { GetComment } from "../services/GetComment";
import { GetSinglePost } from "../services/GetSinglePost";
import { LikePost } from "../services/LikePost";


const initialState = {
    posts: [],
    loading: false,
    error: null,
    status: "idle",
    dPosts: [],
    post: null,
    comments: [],

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

export const loadDislike = createAsyncThunk("posts/loadDislike",
    async ({ token, id }, thunkAPI) => {
        try {
            const res = await DislikePost({ token, id });
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })

export const loadComments = createAsyncThunk("posts/loadComments",
    async (postId, thunkAPI) => {
        try {
            const res = await GetComment(postId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })
export const addComment = createAsyncThunk("posts/addComment",
    async ({ postId, commentData, token }, thunkAPI) => {
        try {
            const res = await AddComment({ postId, commentData, token });
            return res.data
        }
        catch (err) {
            thunkAPI.rejectWithValue(err.message)
        }

    })

export const editComment = createAsyncThunk("posts/editComment",
    async ({ postId, commentId, commentData, token }, thunkAPI) => {
        try {
            const res = await EditComment({ postId, commentId, commentData, token })
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })
export const getSinglePost = createAsyncThunk("posts/getSinglePost",
    async (postId, thunkAPI) => {
        try {
            const res = await GetSinglePost(postId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })

export const deletePost = createAsyncThunk("posts/deletePost",

    async ({ postId, token }, thunkAPI) => {
        try {
            const res = await DeletePost({ postId, token });
            return res.data;

        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        dislikePosts: (state, action) => {
            if (action.payload.type === "like") {
                const id = state.dPosts.find((postId) => postId === action.payload.id);
                state.dPosts.pop(id)

            }
            else {

                state.dPosts.push(action.payload.id)
            }
        },

    },
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
        },
        [loadDislike.pending]: (state) => {
            state.loading = true;
        },
        [loadDislike.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [loadDislike.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [loadComments.pending]: (state) => {
            state.loading = true;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        [loadComments.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addComment.pending]: (state) => {
            state.loading = true;
        },
        [addComment.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;

        },
        [addComment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [editComment.pending]: (state) => {
            state.loading = true;
        },
        [editComment.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        [editComment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getSinglePost.pending]: (state) => {
            state.loading = true;
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload

        },
        [getSinglePost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [deletePost.pending]: (state) => {
            state.loading = true;
        },
        [deletePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [deletePost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


    }
})

export const { dislikePosts, replyComment } = postsSlice.actions;

export default postsSlice.reducer;