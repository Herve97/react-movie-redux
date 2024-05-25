/* eslint-disable no-unused-vars */
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import movieSlice from "./movies/movieSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
