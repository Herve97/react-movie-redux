import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";

import {
  removeSelectedMovieOrShow,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setsearch("");
  };

  const handleOnChange = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            placeholder="Search Movies or Shows"
            onChange={handleOnChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
