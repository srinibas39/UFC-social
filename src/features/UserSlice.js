import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FollowServices } from "../services/FollowService";
import { GetAllUsers } from "../services/GetAllUsers";
import { GetSingleUser } from "../services/GetSingleUser";



const initialState = {
    users: [],
    loading: false,
    error: "",
    user: {},
    followUser: {}


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
export const followUser = createAsyncThunk("users/followUser",
    async ({ token, userId }, thunkAPI) => {
        try {
            
            const res = await FollowServices(token, userId);
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
        [followUser.pending]: (state) => {
            state.loading = true;

        },
        [followUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.followUser = action.payload.followUser;
        },
        [followUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }

})


export default userSlice.reducer;

