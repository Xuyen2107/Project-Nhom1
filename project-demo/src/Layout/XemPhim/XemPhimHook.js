import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allMovies } from "../../Data/DataALLMovies.js";

const MovieWatchDetail = () => {
   const { idx } = useParams();
   const [movieId, link] = idx.split("_");

   const [selectMovie, setSelectMovie] = useState(null);
   const [listAllMovie, setListAllMovie] = useState([]);

   useEffect(() => {
      setListAllMovie(allMovies);
   }, []);

   useEffect(() => {
      const movieDetail = listAllMovie.find((x) => x.id === parseInt(movieId));
      setSelectMovie(movieDetail);
   }, [movieId, listAllMovie]);

   return { selectMovie, movieId, allMovies };
};

export default MovieWatchDetail;
