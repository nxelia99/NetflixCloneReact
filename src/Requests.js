const API_KEY = "28bc1f72610b17793bd775046a22d296";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTrailer: async (mediaId) => {
        try {
            // Intentar primero con el endpoint de películas
            let url = `https://api.themoviedb.org/3/movie/${mediaId}?append_to_response=videos&api_key=${API_KEY}`;
            console.log("Fetching trailer from Movie URL:", url);  // Log de la URL de Movie
            
            let response = await fetch(url);
            if (!response.ok) {
                let url = `https://api.themoviedb.org/3/tv/${mediaId}?append_to_response=videos&api_key=${API_KEY}`;
                let response = await fetch(url);
                return response;
            }
            let data = await response.json();

            // Verificar si se encontraron videos tipo Trailer
            if (data.videos && data.videos.results && data.videos.results.length > 0) {
                const trailer = data.videos.results.find(
                    (video) => video.type === 'Trailer' && video.site === 'YouTube'
                );
                if (trailer) {
                    const channelName = trailer.name.split(' - ')[1];
                    const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}${channelName ? `&ab_channel=${encodeURIComponent(channelName)}` : ''}`;
                    console.log("Constructed YouTube URL:", youtubeUrl);  // Log de la URL de YouTube construida
                    return youtubeUrl;
                }
            }

            // Si no se encontraron videos en películas, intentar con el endpoint de series
            url = `https://api.themoviedb.org/3/tv/${mediaId}?append_to_response=videos&api_key=${API_KEY}`;
            console.log("Fetching trailer from TV URL:", url);  // Log de la URL de TV
            
            response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            data = await response.json();

            // Verificar si se encontraron videos tipo Trailer
            if (data.videos && data.videos.results && data.videos.results.length > 0) {
                const trailer = data.videos.results.find(
                    (video) => video.type === 'Trailer' && video.site === 'YouTube'
                );
                if (trailer) {
                    const channelName = trailer.name.split(' - ')[1];
                    const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}${channelName ? `&ab_channel=${encodeURIComponent(channelName)}` : ''}`;
                    console.log("Constructed YouTube URL:", youtubeUrl);  // Log de la URL de YouTube construida
                    return youtubeUrl;
                }
            }

            // Si no se encontraron videos en ninguno de los casos
            console.log("No trailers found for mediaId:", mediaId);
            return "";
            
        } catch (error) {
            console.error("Failed to fetch trailer:", error);
            return "";
        }
    }
};


export default requests;