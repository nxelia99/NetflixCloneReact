import React, { useEffect, useState } from 'react'
import "./CSS/Banner.css"
import axios from '../axios';
import requests from '../requests.js';
import YouTube from 'react-youtube';

function Banner(isMovie = true) {
  const [movie, setMovie] = useState([]);
  const [trailerId, setTrailerId] = useState(null);

  const base_url = 'https://image.tmdb.org/t/p/original/';
  useEffect(() =>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;
    }
    fetchData();
  }, [])

  console.log(movie)

  function truncate(string, n){
    return string?.length > n ? string.substr(0, n - 1) + '...' :string;

  }  
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
    <div className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>

        <header className='banner_contents'>
            <h1 className='banner_title'>
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button' onClick={() => handleClick(movie)}> Play </button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
        </header>

        <div className='banner-fadeBottom' />
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
  )
}

export default Banner