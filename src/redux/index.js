import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./slice/usersSlice";

export const store = configureStore({
    reducer: {
      users: usersReducers,
    }
})

