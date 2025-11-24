import { useState } from "react";

// Searching is not totally implemented. Primarily focused on the form. No results are yielded yet.
export default function Search() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([])

    const searchMovie = async (e) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer [key here]' // the .env file isn't working.
            }
        };

        await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}include_adult=false&language=en-US&page=1`, options)
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
        <button
        onClick={searchMovie}/>
        </div>
    )
}