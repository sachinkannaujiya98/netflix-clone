const API_KEY="5a72ecc76a9e3e856e9cd9257b7ab78e";


const requests = {
    fetchNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTranding:`/trending/all/day?api_key=${API_KEY}`,
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpComing:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest:`/movie/latest?api_key=${API_KEY}&language=en-US`,
}
export default requests;

// https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>

// https://api.themoviedb.org/3/movie/latest?api_key=5a72ecc76a9e3e856e9cd9257b7ab78e&language=en-US