
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/song/songSlice"
import albumReducer from "../features/album/albumSlice"


export const store = configureStore({
   reducer:{
     song:songReducer,
     album:albumReducer
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;