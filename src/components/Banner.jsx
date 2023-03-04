import React from "react";

export default function Banner({ movie }) {
  const { title, poster_path, overview } = movie;
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${poster_path}` +
          ")",
      }}
    >
      <div className="banner-info">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
}
