// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import userAuthReducer from "../slices/userAuthSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    userauth: userAuthReducer,
  },
});

export default store;
