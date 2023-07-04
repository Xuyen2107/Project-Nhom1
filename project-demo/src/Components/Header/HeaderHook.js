import { useState, useEffect, useContext } from "react";
import { HomeContext } from "../../Context/HomeContext.js";
import { allMovies } from "../../Data/DataALLMovies.js";
import Cookies from "js-cookie";

const HookHeader = () => {
   const { setUserLogin } = useContext(HomeContext);
   const [inputValue, setInputValue] = useState("");
   const [listAllMovie, setListAllMovie] = useState([]);
   const [listMovieSearch, setListMovieSearch] = useState([]);
   const [result, setResult] = useState(false);

   useEffect(() => {
      const newAllMovie = allMovies.map((prop) => {
         return {
            id: prop.id,
            name: prop.name,
            eName: prop.eName,
            image: prop.image,
            nowPlaying: prop.nowPlaying,
            year: prop.year,
            country: prop.country,
            category: prop.category,
            director: prop.director,
            actor: prop.actor,
         };
      });
      setListAllMovie(newAllMovie);
   }, []);

   useEffect(() => {
      if (inputValue) {
         const searchResults = listAllMovie.filter((movie) => {
            for (let prop in movie) {
               if (movie[prop].toString().toLowerCase().includes(inputValue.toLowerCase())) {
                  return true;
               }
            }
            return false;
         });
         setListMovieSearch(searchResults);
      } else {
         setListMovieSearch([]);
      }
   }, [inputValue, listAllMovie]);

   useEffect(() => {
      if (result) {
         setInputValue("");
      }
   }, [result]);

   const searchInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const searchClick = () => {
      setResult((prevResult) => !prevResult);
   };

   const logOut = () => {
      setUserLogin(null);
      Cookies.remove("userLogin");
   };

   return { inputValue, listMovieSearch, result, searchInputChange, searchClick, logOut };
};

export default HookHeader;
