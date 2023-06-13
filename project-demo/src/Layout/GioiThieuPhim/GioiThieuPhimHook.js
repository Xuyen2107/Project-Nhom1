import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allMovies } from "../../Data/DataALLMovies.js";

const MovieDetail = () => {
   const { id } = useParams();
   const [selectMovie, setSelectMovie] = useState(null);
   const [listAllMovie, setListAllMovie] = useState([]);

   useEffect(() => {
      setListAllMovie(allMovies);
   }, []);

   useEffect(() => {
      const movieDetail = listAllMovie.find((x) => x.id === parseInt(id));
      setSelectMovie(movieDetail);
   }, [id, listAllMovie]);

   return { selectMovie };
};

export default MovieDetail;
