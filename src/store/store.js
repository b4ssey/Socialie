import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./ducks/users";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
