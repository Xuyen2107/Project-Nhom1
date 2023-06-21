import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { allMovies } from "../../Data/DataALLMovies.js";

const MovieDetail = () => {
   const { id } = useParams();
   const [movieId, link] = id.split("_");
   const [listAllMovie, setListAllMovie] = useState(allMovies);
   const [selectMovie, setSelectMovie] = useState([]);
   const [result, setResult] = useState(false);
   const elementRef = useRef();

   useEffect(() => {
      if (movieId && listAllMovie.length > 0) {
         const movieDetail = listAllMovie.find((x) => x.id === parseInt(movieId));
         setSelectMovie(movieDetail);
      }
   }, [movieId, listAllMovie]);

   useEffect(() => {
      if (result) {
         elementRef.current.scrollIntoView({ behavior: "smooth" });
      }
   }, [result]);

   const videoTrailer = () => {
      setResult(!result);
   };

   return { selectMovie, result, videoTrailer, elementRef };
};

export default MovieDetail;
