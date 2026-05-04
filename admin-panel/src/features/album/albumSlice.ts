import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../App";


// STEP 6.1: Create Async Thunk (API call)
export const fetchAlbum = createAsyncThunk(
    "album/fetchAlbums",
    async () => {
        const response = await axios.get(`${url}/api/album/list`);
        return response.data.albums;
    }
);

export const deleteAlbum = createAsyncThunk(
    "album/deleteAlbum",
    async (id) => {
        const response = await axios.post(`${url}/api/album/remove`, { id });
        return { id, message: response.data.message };
    }
);

// STEP 6.2: Create Slice
const albumSlice = createSlice({
    name: "album",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},

    // STEP 6.3: Handle API states
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbum.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAlbum.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAlbum.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteAlbum.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    (album) => album._id !== action.payload.id
                );
            })
    },
});

export default albumSlice.reducer;