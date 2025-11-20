import MovieBasic from "./MovieBasic";
import MovieAdv from "./MovieAdv";
import { useState } from "react";

// Use https://api.themoviedb.org/3/movie/{movie_id}.

// Utilizes both the MovieBasic and MovieAdv components to encapsulate an entire movie component.
export default function Movie(props) {
    const { title, year, runtime, rated, genre, poster, tagline, plot, director, actors, rt_rating, i_rating, mc_rating } = props

    return (

        <div>
            <MovieBasic
                title={title}
                year={year}
                runtime={runtime}
                rated={rated}
                genre={genre}
                poster={poster}
            >
            </MovieBasic>
            <MovieAdv
                plot={plot}
                director={director}
                actors={actors}
                rt_rating={rt_rating}
                i_rating={i_rating}
                mc_rating={mc_rating}>
            </MovieAdv>
        </div>
    );
}