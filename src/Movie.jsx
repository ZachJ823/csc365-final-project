import MovieBasic from "./MovieBasic";
import MovieAdv from "./MovieAdv";

export default function Movie(props) {
    const {title, year, runtime, rated, genre, short_plot, long_plot, actors} = props
    return (

        <div>
            <MovieBasic
            title={title}
            year={year}
            runtime={runtime}
            rated={rated}
            genre={genre}
            short_plot={short_plot}> 
            </MovieBasic>
            <MovieAdv
                long_plot={long_plot}
                actors={actors}>
            </MovieAdv>
        </div>
    );
}