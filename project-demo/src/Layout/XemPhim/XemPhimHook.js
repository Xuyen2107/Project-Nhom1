// import { useState, useEffect, useContext } from "react";
// import { HomeContext } from "../../Context/HomeContext";
// import { useParams } from "react-router-dom";
// import { allMovies } from "../../Data/DataALLMovies.js";

// const MovieWatchDetail = () => {
//    const { id } = useParams();
//    const { setMovieShow } = useContext(HomeContext);
//    const [movieId, link] = id?.split("_");

//    useEffect(() => {
//       const movieDetail = allMovies.find((x) => x.id === parseInt(movieId));
//       setMovieShow(movieDetail);
//    }, [movieId, setMovieShow]);

//    return { movieId, allMovies };
// };

// export default MovieWatchDetail;
