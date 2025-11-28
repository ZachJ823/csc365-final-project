import React, { useState } from "react";

// Component for users to leave ratings on a movie
export default function Rating({ onSubmitRating }) {
    const [numRating, setNumRating] = useState('');
    const [textRating, setTextRating] = useState('');

    // Function to handle rating submission. These submissions are stored locally.
    const submitRating = () => {
        onSubmitRating({ numRating, textRating });
        console.log(`Rated movie: ${numRating} - ${textRating}`)
    }

    return (
        <form onSubmit={submitRating}>
            <label htmlFor="numrating">How would you rate the movie? (0 through 10)</label>
            <input
                id="numrating"
                name="numRating"
                type="number"
                required={true}
                min={0}
                max={10}
                step={1}
                value={numRating}
                onChange={(e) => setNumRating(e.target.value)}
            />

            <label htmlFor="textrating">What were your thoughts on the movie?</label>
            <input
                id="textrating"
                type="text"
                name="textRating"
                required={false}
                minLength={0}
                maxLength={1000}
                value={textRating}
                onChange={(e) => setTextRating(e.target.value)}
                placeholder="Leave a review here!"
            />

            <button type="submit"> Submit Rating </button>
        </form>
    );
}