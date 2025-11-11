import React from "react";


// Temporary
const MovieBasic = ({title, year, runtime, rated, genre, short_plot}) => (
    <div>
        <p>{title} | {year} | {rated}</p>
        <p>{runtime} | {genre} </p>
        <p>{short_plot}</p>
    </div>
);

export default MovieBasic