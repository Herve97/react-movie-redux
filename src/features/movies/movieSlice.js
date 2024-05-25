/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApis from "../../common/apis/movieApis";
import { APIKey } from "./../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "jackie Chan";
    const response = await movieApis.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async (term) => {
    // const seriesText = "the chosen";
    const response = await movieApis.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApis.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("Data pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    });
    builder.addCase(
      fetchAsyncMovieOrShowDetail.fulfilled,
      (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectMovieOrShow: payload };
      }
    );
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Data rejected");
    });
    // [fetchAsyncMovies.pending]: () => {
    //   console.log("Data pending");
    // },
    // [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, movies: payload };
    // },
    // [fetchAsyncMovies.rejected]: () => {
    //   console.log("Fetched rejected!");
    // },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
