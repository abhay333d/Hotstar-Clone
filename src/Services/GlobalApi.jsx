import axios from "axios";

const movieBasedUrl = "https://api.themoviedb.org/3";
const api_key = "0616e71bbbdfbbe6fbf210b761639f0f";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const getTrendingVideos = axios.get(
  movieBasedUrl + "/discover/movie?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { getTrendingVideos, getMovieByGenreId };
