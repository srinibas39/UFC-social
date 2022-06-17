import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AddBookmark } from "../services/AddBookmark";
import { EditUser } from "../services/EditUser";
import { FollowServices } from "../services/FollowService";
import { GetAllUsers } from "../services/GetAllUsers";
import { GetSingleUser } from "../services/GetSingleUser";
import { RemoveBookmark } from "../services/RemoveBookmark";
import { UnfollowService } from "../services/UnfollowService";

const initialState = {
    users: [],
    loading: false,
    error: "",
    user: {},
    bookmarks: [],

}

export const getAllUsers = createAsyncThunk("users/getAllUsers",
    async (thunkAPI) => {
        try {
            const res = await GetAllUsers();
            return res.data.users;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const getSingleUser = createAsyncThunk("users/getSingleUser",
    async (userId, thunkAPI) => {
        try {
            const res = await GetSingleUser(userId);
            return res.data.user;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const follow = createAsyncThunk("users/follow",
    async ({ token, userId }, thunkAPI) => {
        try {

            const res = await FollowServices(token, userId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })

export const unfollowUser = createAsyncThunk("/users/unfollowUser",
    async ({ token, userId }, thunkAPI) => {
        try {
            const res = await UnfollowService(token, userId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })

export const editUser = createAsyncThunk("users/editUse",
    async ({ token, userData }, thunkAPI) => {
        try {
            const res = await EditUser(token, userData);
            return res.data.user;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const addBookmark = createAsyncThunk("users/addBookmark",
    async ({ token, postId }, thunkAPI) => {
        try {
            const res = await AddBookmark(token, postId);
            return res.data.bookmarks;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })

export const removeBookmark = createAsyncThunk("users/removeBookmark",
    async ({ token, postId }, thunkAPI) => {
        try {
            const res = await RemoveBookmark(token, postId);
            return res.data.bookmarks;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const userSlice = createSlice({
    initialState,
    name: "users",
    reducers: {
        setBookmarks: (state, action) => {
            state.bookmarks.push(action.payload);
        },
        setUnbookmark: (state, action) => {
           
          const book=state.bookmarks.find(post => post._id === action.payload._id);
            
            state.bookmarks.pop(book)
        }
    },

    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loading = true;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [getSingleUser.pending]: (state) => {
            state.loading = true;
        },
        [getSingleUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [getSingleUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [follow.pending]: (state) => {
            state.loading = true;
        },
        [follow.fulfilled]: (state) => {
            state.loading = false;
        },
        [follow.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [unfollowUser.pending]: (state) => {
            state.loading = true
        },
        [unfollowUser.fulfilled]: (state) => {
            state.loading = false;
        },
        [unfollowUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [editUser.pending]: (state) => {
            state.loading = true;
        },
        [editUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [editUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addBookmark.pending]: (state) => {
            state.loading = true;
        },
        [addBookmark.fulfilled]: (state, action) => {
            state.loading = false;
            state.bookmarks = action.payload;

        },
        [addBookmark.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [removeBookmark.pending]: (state) => {
            state.loading = true;
        },
        [removeBookmark.fulfilled]: (state, action) => {
            state.loading = false;
            state.bookmarks = action.payload;
        },
        [removeBookmark.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }

})


export const { setBookmarks, setUnbookmark } = userSlice.actions;

export default userSlice.reducer;

