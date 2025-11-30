import MovieBasic from "./MovieBasic";
import Rating from "./Rating";
import useLocalStorage from "../hooks/UseLocalStorage";

// Use https://api.themoviedb.org/3/movie/{movie_id}.

// Utilizes both the MovieBasic and MovieAdv components to encapsulate an entire movie component.
// Tagline is not implemented yet. Depends on the final design.
export default function Movie(props) {
    const { id, title, year, runtime, rated, genre, poster, tagline } = props

    const [movies, setMovies] = useLocalStorage("movies", {});

    const movieData = movies[id] || {
        favorited: false,
        watched: false,
        rating: [0, ""],
    };

    const { favorited, watched, rating } = movieData;

    // movieWatched and movieFavorited are stored locally.
    // Function to toggle movies as watched
    // JS is gross
    const movieWatched = () => {
        setMovies(prevMovies => ({ // Literally the most disgusting concept ever. => is stupid.
            ...prevMovies,
            [id]: { ...prevMovies[id], watched: !watched }
        }));
    }

    // Function to toggle movies are favorited
    const movieFavorited = () => {
        setMovies(prevMovies => ({
            ...prevMovies,
            [id]: { ...prevMovies[id], favorited: !favorited }
        }));
    }

    // Function to rate movies
    const ratedMovie = (newRating) => {
        setMovies(prevMovies => ({
            ...prevMovies,
            [id]: { ...prevMovies[id], rating: [newRating.numRating, newRating.textRating] }
        }))
        console.log(movies);
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
            <button
                onClick={movieWatched}
            >
                {!watched ? "Watch" : "Watched"}
            </button>
            <button
                onClick={movieFavorited}
            >
                {!favorited ? "Favorite" : "Unfavorite"}
            </button>

            <Rating onSubmitRating={ratedMovie}>
            </Rating>
        </div>

    );
}