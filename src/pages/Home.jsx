import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <ClipLoader
        color="#fff"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>TopRated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
}
