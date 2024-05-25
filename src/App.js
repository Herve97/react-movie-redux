/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="app">
          <Header />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie/:imdbID",
          element: <MovieDetail />,
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

/*
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={<Home />}></Route>
          <Route exact path="/movie/:imdbID" component={<MovieDetail />}>
            {" "}
          </Route>
          <Route component={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );

*/
