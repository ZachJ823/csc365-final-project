import React from "react";

// Use https://api.themoviedb.org/3/movie/{movie_id}.

// Component holding basic information on a given movie
const MovieBasic = ({ title, year, genre, poster }) => (
    <div>
        <p>{title} | {year} </p>
        <img className="poster" width="250px" src={`https://image.tmdb.org/t/p/w500/${poster}`}></img>
        <p> {genre} </p>
    </div>
);

export default MovieBasic