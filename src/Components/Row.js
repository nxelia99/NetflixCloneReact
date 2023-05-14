import React, { useEffect, useState } from 'react'
import axios from "../axios";
import "./CSS/Row.css"
import { BiPlay } from "react-icons/bi";

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    },[fetchUrl]);


  return (

    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
            {movies.map((movie) =>(
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                
                <div>    

                <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name} />

                <div className='bottom_row'>
                    <p>{movie?.title || movie?.name || movie?.original_name}</p> 
                    <i>{BiPlay}</i>
                </div>
                </div>

                )))}

           
             

        </div>

    </div>

  )
}

export default Row