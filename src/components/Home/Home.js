/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import MovieListing from "./../MovieListing/MovieListing";
import movieApis from "../../common/apis/movieApis";
import { APIKey } from "./../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import {
  removeSelectedMovieOrShow,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      // const response = await movieApis
      //   .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      //   .catch((err) => {
      //     console.log("Err :", err);
      //   });
      dispatch(fetchAsyncMovies("Jackie chan"));
      dispatch(fetchAsyncShows("blacklist"));
    };

    // const fetchShows = async () => {
    //   dispatch(fetchAsyncShows());
    // };

    fetchMovies();
    // fetchShows();
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
