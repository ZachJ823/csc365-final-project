import MovieBasic from "./MovieBasic";
import MovieAdv from "./MovieAdv";
import { useState } from "react";
import Rating from "./Rating";

// Use https://api.themoviedb.org/3/movie/{movie_id}.

// Utilizes both the MovieBasic and MovieAdv components to encapsulate an entire movie component.
// Tagline is not implemented yet. Depends on the final design.
export default function Movie(props) {
    const { title, year, runtime, rated, genre, poster, tagline, plot, director, actors, rt_rating, i_rating, mc_rating } = props

    const [watched, setWatched] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [rating, setRating] = useState([]);


    // movieWatched and movieFavorited are stored locally.
    // Function to toggle movies as watched
    const movieWatched = () => {
        setWatched(!watched);
    }

    // Function to toggle movies are favorited
    const movieFavorited = () => {
        setFavorited(!favorited);
    }

    const ratedMovie = (newRating) => {
        setRating([...rating, newRating]);
    }

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
                actors={actors || []}
                rt_rating={rt_rating}
                i_rating={i_rating}
                mc_rating={mc_rating}>
            </MovieAdv>
            <Rating onSubmitRating={ratedMovie}>
            </Rating>
        </div>

    );
}