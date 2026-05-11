import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000";

// Async API Call
export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async () => {
    const response = await axios.get(`${url}/api/song/list`);
    return response.data.songs;
  },
);

const songSlice = createSlice({
  name: "songs",
  initialState: {
    songsData: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.songsData = action.payload;
      })

      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default songSlice.reducer;