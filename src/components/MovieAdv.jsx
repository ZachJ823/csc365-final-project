import React from "react";

// Use https://api.themoviedb.org/3/movie/{movie_id}.

// Component holding advanced information on a given movie
const MovieAdv = ({ plot, actors, rt_rating, i_rating, mc_rating }) => (
    <div>
        <p>{plot}</p>
        <ul>
            {actors.map((actor, index) =>
                <li key={index}>{actor}</li>
            )}
        </ul>
        <p>{i}</p>
    </div>
);

export default MovieAdv