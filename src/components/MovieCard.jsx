import React from "react";
import Badge from "react-bootstrap/Badge";

export default function MovieCard({ movie }) {
  const { poster_path, title, genre_ids, vote_average, adult } = movie;
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
          {genre_ids.map((item) => (
            <Badge bg="danger">{item}</Badge>
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
