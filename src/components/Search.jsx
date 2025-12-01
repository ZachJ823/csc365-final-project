import { useState } from "react";
import Movie from "./Movie";

// Wow I hate react and javascript. And the web. CORS is truly one of the most amazing things.
export default function Search() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([])

    const searchMovie = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer [API Key Here]'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(data => {
                setResults(data.results);
                console.log(data);
            })
            .then()
            .catch(err => console.error(err));
    };

    return (
        <div>
            <input
                type="text"
                name="searchinput"
                required={true}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a movie."
            />
            <button onClick={searchMovie}>
                Search
            </button>
            <div>
                {results.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={new Date(movie.release_date).getFullYear()}
                        runtime={movie.runtime}
                        genre={movie.genre_ids.join(", ")}
                        poster={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    )
}