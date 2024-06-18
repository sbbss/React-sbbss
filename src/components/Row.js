import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./css/Row.css";
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || '')
      .then (url => {
        const urlParams = URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(err => console.log(err));
    }
  };
  const renderMovies = movies.map((movie) => {
    return (
      <img
        className={`row_poster ${isLargeRow && "row_poster_large"}`}
        key={movie.id}
        onClick={() => handleClick(movie)}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
    );
  });

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_posters">{renderMovies}</div>
      { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} className="youtube"/>} 
    </div>
  );
};

export default Row;
