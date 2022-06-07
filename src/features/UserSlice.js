import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FollowServices } from "../services/FollowService";
import { GetAllUsers } from "../services/GetAllUsers";
import { GetSingleUser } from "../services/GetSingleUser";
import { UnfollowService } from "../services/UnfollowService";





const initialState = {
    users: [],
    loading: false,
    error: "",
    user: {}
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
export const userSlice = createSlice({
    initialState,
    name: "users",
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
        }
    }

})


export default userSlice.reducer;

