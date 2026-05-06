import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../App";

// STEP 6.1: Create Async Thunk (API call)
export const fetchSongs = createAsyncThunk(
    "song/fetchSongs",
    async () => {
        const response = await axios.get(`${url}/api/song/list`);
        return response.data.songs;
    }
);

export const deleteSong = createAsyncThunk(
    "song/deleteSong",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/api/song/remove`, { id });
            return { id, message: response.data.message };
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Something went wrong"
            );
        }

    }
);


// STEP 6.2: Create Slice
const songSlice = createSlice({
    name: "song",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},

    // STEP 6.3: Handle API states
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteSong.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    (song) => song._id !== action.payload.id
                );
            })
            .addCase(deleteSong.rejected, (state, action) => {
                state.error = action.payload;
            })

    },
});

export default songSlice.reducer;