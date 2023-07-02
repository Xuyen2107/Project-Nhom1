import { useState, useEffect, useContext, useRef } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { useParams } from "react-router-dom";
import { allMovies } from "../../Data/DataALLMovies.js";

const MovieDetail = () => {
   const { setMovieShow } = useContext(HomeContext);
   const { id } = useParams();
   const [movieId, link] = id?.split("_");
   const [result, setResult] = useState(false);
   const elementRef = useRef();

   useEffect(() => {
      if (movieId) {
         const movieDetail = allMovies.find((x) => x.id === parseInt(movieId));
         setMovieShow(movieDetail);
      }
   }, [movieId, setMovieShow]);

   useEffect(() => {
      if (result) {
         elementRef.current.scrollIntoView({ behavior: "smooth" });
      }
   }, [result]);

   const videoTrailer = () => {
      setResult(!result);
   };

   return { result, videoTrailer, elementRef };
};

export default MovieDetail;
