import React from "react";

// Use https://api.themoviedb.org/3/movie/{movie_id}.

// Component holding basic information on a given movie
const MovieBasic = ({ title, year, runtime, rated, genre, poster }) => (
    <div>
        <p>{title} | {year} | {rated}</p>
        <p>{runtime} | {genre} </p>
        <p>{poster}</p>
    </div>
);

export default MovieBasic