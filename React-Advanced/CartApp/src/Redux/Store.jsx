import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices";

export const store=configureStore({
    reducer:{
          cart:CartSlice.reducer
    }
})