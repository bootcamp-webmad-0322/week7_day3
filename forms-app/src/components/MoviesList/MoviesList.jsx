import { useState } from "react";
import MovieCard from "./../MovieCard/MovieCard";
import { movies as moviesData } from "./../../fakeAPI";
import AddMovie from "../AddMovie/AddMovie"
import FilterMovies from "../MoviesFilter/MoviesFilter";


function MovieList() {

    const [movies, setMovies] = useState(moviesData)
    const [moviesBackup, setMoviesBackup] = useState(moviesData)

    const insertNewMovie = newMovie => {
        const moviesCopy = [...movies, newMovie]
        setMovies(moviesCopy)

        const moviesBackupCopy = [...moviesBackup, newMovie]
        setMoviesBackup(moviesBackupCopy)
    }

    const filterMovies = firstLetter => {

        let filteredMovies

        if (firstLetter === 'All') {
            filteredMovies = moviesBackup
        } else {
            filteredMovies = moviesBackup.filter(elm => elm.title.startsWith(firstLetter))
        }

        setMovies(filteredMovies)
    }

    return (
        <div>

            <AddMovie insertMovie={insertNewMovie} />

            <hr />

            <FilterMovies filterByFirstLetter={filterMovies} />

            <hr />

            <h2>Movie List</h2>
            {movies.map(movie => <MovieCard key={movie._id} {...movie} />)}
        </div>
    );
}

export default MovieList;