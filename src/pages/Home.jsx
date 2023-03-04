import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

export default function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  console.log(popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      <Banner />
    </div>
  );
}
