import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 43e823da

const API_URL = "http://www.omdbapi.com/?apikey=43e823da";
const movie1 = {
    Title: "Batman: The Animated Series",
    Year: "1992–1995",
    imdbID: "tt0103359",
    Type: "series",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
};

const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };
    useEffect(() => {
        searchMovies("batman");
    }, []);
    return (
        <div className="app">
            <h1>MovieParadise</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value )}
                />

                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;
