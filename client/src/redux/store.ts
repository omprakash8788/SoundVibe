
import { configureStore } from "@reduxjs/toolkit";
// import songReducer from "../features/song/songSlice"
// import albumReducer from "../features/album/albumSlice"
import songReducer from '../features/songSlice'


export const store = configureStore({
   reducer:{
     song:songReducer,
  
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;