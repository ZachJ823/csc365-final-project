import React, { useState } from "react";


// Component for users to leave ratings on a movie
export default function Rating(props)
{
    const [numRating, setNumRating] = useState('');
    const [textRating, setTextRating] = useState('');

    // Function to handle rating submission. These submissions are stored locally.
    const submitRating = () => {
    }

    return (
        <form action={submitRating}>
            <input
            type="text"
            name="Textual Review"
            value = {textRating}
            onChange={(e) => setTextRating(e.target.value)}
            placeholder="Leave a review here!"
            />
            <button type="submit"> Submit Rating </button>
        </form>
    );
}