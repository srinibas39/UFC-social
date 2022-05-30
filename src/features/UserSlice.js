import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetAllUsers } from "../services/GetAllUsers";



const initialState = {
    users: [],
    loading: false,
    error: ""
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
export const userSlice = createSlice({
    initialState,
    name: "users",
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loading = true;
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        [getAllUsers.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        }
    }

})


export default userSlice.reducer;

