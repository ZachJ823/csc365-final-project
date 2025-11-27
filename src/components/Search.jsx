import { useState } from "react";

// Wow I hate react and javascript. And the web. CORS is truly one of the most amazing things.
export default function Search() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([])

    const searchMovie = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.API_AUTH}`,
                api_key: import.meta.env.API_KEY
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => console.log(res))
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
        </div>
    )
}