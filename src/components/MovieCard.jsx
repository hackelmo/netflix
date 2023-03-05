import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

export default function MovieCard({ movie }) {
  const { poster_path, title, genre_ids, vote_average, adult } = movie;
  const { genreListMovies } = useSelector((state) => state.movie);
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w710_and_h400_multi_faces${poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{title}</h1>

        <div>
          {genre_ids.map((item, i) => (
            <Badge bg="danger" key={`genre_ids${i}`}>
              {genreListMovies.find((genre) => genre.id === item).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{vote_average}</span>
          <span>{adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
}
