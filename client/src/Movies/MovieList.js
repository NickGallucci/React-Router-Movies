import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
  console.log(props);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    console.log(movies);
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key = {movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const movie = props.movie;
  return (
    // <div className="movie-card">
    //   <h2>{title}</h2>
    //   <div className="movie-director">
    //     Director: <em>{director}</em>
    //   </div>
    //   <div className="movie-metascore">
    //     Metascore: <strong>{metascore}</strong>
    //   </div>
    //   <h3>Actors</h3>

    //   {stars.map(star => (
    //     <div key={star} className="movie-star">
    //       {star}
    //     </div>
    //   ))}
    // </div>
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie}/>
    </Link>
  );
}

export default MovieList;
