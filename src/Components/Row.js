import React, { useEffect, useState } from 'react'
import axios from "../axios";
import "./CSS/Row.css"
import { BiPlay } from "react-icons/bi";
import requests from "../requests.js";
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow = false, isMovie = true }) {
    const [movies, setMovies] = useState([]);
    const [trailerId, setTrailerId] = useState(null);

    const base_url = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        try {
            const url = await requests.fetchTrailer(movie.id, isMovie);
            if (url) {
                const videoId = extractVideoId(url);
                setTrailerId(videoId);
            } else {
                console.log('No se encontró tráiler para esta película/serie.');
            }
        } catch (error) {
            console.error('Error al obtener el tráiler:', error);
        }
    };

    const handleClosePlayer = () => {
        setTrailerId(null);
    };

    const extractVideoId = (url) => {
        // Extrae el ID del video de YouTube desde la URL
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match && match[1];
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <div key={movie.id}>
                            <img
                                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={() => handleClick(movie)}
                            />
                            <div className='bottom_row'>
                                <p>{movie?.title || movie?.name || movie?.original_name}</p>
                                <BiPlay />
                            </div>
                        </div>
                    )
                ))}
            </div>
            {trailerId && (
                <div className='video_player'>
                    <button className='close_button' onClick={handleClosePlayer}>
                        Cerrar
                    </button>
                    <YouTube
                        className='video_frame'
                        videoId={trailerId}
                        opts={{ width: '100%', height: '500', playerVars: { autoplay: 1 } }}
                        onReady={(event) => event.target.playVideo()}
                        onEnd={() => handleClosePlayer()}
                    />
                </div>
            )}
        </div>
    );
}


export default Row;